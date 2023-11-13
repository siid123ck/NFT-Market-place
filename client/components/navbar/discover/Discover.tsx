import Link from 'next/link'
import React from 'react'

const Discover = () => {
  return (
    <div className="absolute top-6  bg-white p-2 rounded shadow-md p-2 
    flex flex-col text-purple-700" style={{width:'139px'}}>
      {/* Assuming these are your dropdown items */}
      <Link href="/collection" passHref>
        Collection 
      </Link>
      <Link href="/authour" passHref>
        Author Profile
      </Link>
      <Link href="/search" passHref>
        Search
      </Link>
      <Link href="/nft" passHref>
        NFT details
      </Link>
      <Link href="/account-selling" passHref>
        Account selling
      </Link>
      <Link href="/connect-wallet" passHref>
        Connect Wallet
      </Link>
      <Link href="/blog" passHref>
        Blog
      </Link>
    </div>
  )
}

export default Discover;