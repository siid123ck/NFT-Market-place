// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzepplin/contracts/token/ERC721/ERC721.sol";
import "@openzepplin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

import "hardhat/console.sol";

contract NftMarketPlace is ERC721URIStorage{
    using Counters for Counters.Counter;

    Counters.Counter private token_ids;
    Counters.Counter private items_sold;

    address payable owner;
    mapping(uint=>MarketItem) private idMarketItems;
    uint public listingPrice = 0.001 ether;

    struct MarketItem{
        uint tokenId;
        address payable owner;
        address payable seller;
        uint price;
        bool isSold;
    }

    event IdMarketItemCreated(
        uint indexed tokenId,
        address owner,
        address seller,
        uint price,
        bool isSold
    );

    modifier onlyOwner{
        require(msg.sender==owner, "only owner has access to this function");
        _;
    }

    constructor() ERC721("NFT Metaverse Token", "NFTM"){
        owner = msg.sender;
    }

    function updatePriceListing(uint _priceListing) 
     public payable onlyOwner {
        listingPrice = _priceListing;
    }

    function getListingPrice() public view returns(uint){
        return listingPrice;
    }

    function createToken(string memory tokenURI, uint price)
     payable public returns(uint){
        token_ids.increment();
        uint newTokenId = token_ids.current();
        _mint(msg.sender, newTokenId);
        _setTokenUri(newTokenId, tokenURI);
        createMarketItem(newTokenId, price);
        return newTokenId;
    }

    function createMarketItem(uint tokenId, uint price) private{
        require(price > 0, "Price can not be 0");
        require(msg.value == listingPrice, "Price must be equal to listing price");
 
        idMarketItems[tokenId] = MarketItem(
            tokenId,
            payable(address(this)),
            payable(msg.sender),
            price,
            false
        );

        _transfer(msg.sender, address(this), tokenId);
        emit IdMarketItemCreated(
            tokenId, 
            address(this), 
            msg.sender, 
            price, 
            false
            );
    }

    function resaleToken(uint tokenId, uint price) public payable{
        require(idMarketItems[tokenId].owner = msg.sender,
         "only owner of token has access to this function");
        require(msg.value == listingPrice, "price must be equal to listing price"); 

        idMarketItems[tokenId].sold = false;
        idMarketItems[tokenId].price = price;
        idMarketItems[tokenId].owner = payable(address(this));
        idMarketItems[tokenId].seller = payable(msg.sender);

        items_sold.decrement();
        _transfer(msg.sender, address(this), tokenId);
    }

    function executeSale(uint tokenId) public payable{
        uint price = idMarketItems[tokenId].price;
        address seller = idMarketItems[tokenId].seller;
        require(msg.value == price, "value sent must be equal to the price of token");

        items_sold.increment();
        idMarketItems[tokenId].isSold = true;
        idMarketItems[tokenId].owner = payable(msg.sender);
        idMarketItems[tokenId].isSold = true;

        _transfer(address(this), msg.sender, tokenId);
        approve(address(this), tokenId);

        payable(owner).transfer(listingPrice);
        payable(seller).transfer(price);
    }

    function getLatestListedToken() public view returns(
        MarketItem memory
     ){
        uint tokenId = token_ids.current();
        return idMarketItems[tokenId];
    }

    function getListedTokenForId(uint tokenId) public view 
     returns(MarketItem memory) {
        return idMarketItems[tokenId];
    }

    function getAllUnsoldTokens() public view 
     returns(MarketItem[] memory){
        uint tokenCount = token_ids.current();
        uint unsoldCount = tokenCount - items_sold.current();
        uint currentIdx; 
        MarketItem[] tokens = new MarketItem[](unsoldCount);

        for (uint i = 0; i < unsoldCount; i++) {
            if(idMarketItems[i+1].owner == address(this)){
                uint currentId = i + 1;
                MarketItem storage currentToken = idMarketItems[currentId];
                tokens[currentIdx] = currentToken;
                currentIdx ++;
            }  
        }

        return tokens;
    }

    function getAllMyTokens() public view 
     returns(MarketItem[] memory){
        uint tokenCount = token_ids.current();
        uint myTokenCount; 
        uint currentIdx;

        // check total number of my tokens 
        for (uint i = 0; i < tokenCount; i++) {
            if(idMarketItems[i+1].owner == msg.sender){
                myTokenCount++;
            }
        }

        MarketItem[] myTokens = new MarketItem[](myTokenCount);

        for (uint i = 0; i < tokenCount; i++) {
            if(idMarketItems[i+1].owner == msg.sender){
                uint curretId = i + 1; 
                MarketItem storage currentToken = idMarketItems[curretId];
                myTokens[currentIdx] = currentToken;
                currentIdx++;
            }
        }

        return myTokens;
    }

    function getAllUserTokens() public view 
     returns(MarketItem[] memory){
        uint tokenCount = token_ids.current();
        uint myTokenCount; 
        uint currentIdx;

        // check total number of my tokens 
        for (uint i = 0; i < tokenCount; i++) {
            if(idMarketItems[i+1].seller == msg.sender){
                myTokenCount++;
            }
        }

        MarketItem[] myTokens = new MarketItem[](myTokenCount);

        for (uint i = 0; i < tokenCount; i++) {
            if(idMarketItems[i+1].seller == msg.sender){
                uint curretId = i + 1; 
                MarketItem storage currentToken = idMarketItems[curretId];
                myTokens[currentIdx] = currentToken;
                currentIdx++;
            }
        }

        return myTokens;
    }
    
}