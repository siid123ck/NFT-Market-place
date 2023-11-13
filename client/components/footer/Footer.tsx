// components/Footer.tsx
import Link from 'next/link';
import Discover from '../navbar/discover/Discover';
import HelpCenter from '../navbar/helpCenter/HelpCenter';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4">
      <div className="container mx-auto flex justify-between">
        {/* Company logo and information */}
        <div className="text-white flex flex-col">
          <h2 className="font-bold text-xl mb-4">Company Name</h2>
          <p>Appealing information about the company...</p>
        </div>

        <div  className="text-white flex flex-col">
        <h2 className="font-bold text-xl mb-4">Discover</h2>
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

       <div  className="text-white flex flex-col">
        <h2 className="">Help kCenter</h2>       
        <Link href="/about-us" passHref>
        About Us
        </Link>
        <Link href="/contact-us" passHref>
         Contact Us
        </Link>
        <Link href="/subscription" passHref>
        Subscription
        </Link>
        <Link href="/faq" passHref>
        FAQ
        </Link>
        </div>

        {/* Subscribe section */}
        <div className="text-white flex flex-col">
          <h2 className="font-bold text-xl mb-4">Subscribe</h2>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full py-2 px-4 border-2 border-white rounded-md mb-2"
          />
          <button className="bg-white text-purple-700 py-2 px-4 rounded-md">Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
