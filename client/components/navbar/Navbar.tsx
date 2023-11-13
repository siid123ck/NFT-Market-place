// components/Navbar.tsx
"use client"
import Link from 'next/link';
import {useState} from 'react'
import Profile from './profile/Profile';
import Discover from './discover/Discover';
import Notification from './notification/Notification';
import HelpCenter from './helpCenter/HelpCenter';

const Navbar: React.FC = () => {
  const [isDropdownDiscoverOpen, setDropdownDiscoverOpen] = useState(false);
  const [isDropdownProfileOpen, setDropdownProfileOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showHelpCenter, setShowHelpCenter] = useState(false); 

  const toggleDropdownProfile = () => {
    setDropdownProfileOpen(!isDropdownProfileOpen);
  };
  const toggleDropdownDiscover = () => {
    setDropdownDiscoverOpen(!isDropdownDiscoverOpen);
  };
  const toggleShowNotification = () =>{
    setShowNotification(!showNotification)
  }
  const toggleShowHelpCenter = () => {
    setShowHelpCenter(!showHelpCenter);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div className="text-white font-bold text-2xl">
          <Link href="/">Your NFT market</Link>
        </div>

        {/* Search bar in the middle (adjust width as needed) */}
        <div className="flex-grow mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 px-9 border-2 border-white rounded-md 
            focus:outline-none focus:border-purple-600 text-purple-700"
          />
        </div>

        {/* Navigation items on the right */}
        <ul className="flex items-center space-x-8">
          <li  className="relative"
            onMouseEnter={toggleDropdownDiscover}
            onMouseLeave={toggleDropdownDiscover}>
            <Link href="/" className="text-white hover:text-purple-300">
            <span className="cursor-pointer text-white">
             Discover            
            </span>
            {isDropdownDiscoverOpen && (
             <Discover /> 
            )}
            </Link>
          </li>
          <li
          className="relative"
          onMouseEnter={toggleShowNotification}
          onMouseLeave={toggleShowNotification}>
            <Link href="/help" className="text-white hover:text-purple-300">
            <span className="cursor-pointer text-white">
             Notifications            
            </span>
            {showNotification && (
              <Notification />
            )}
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={toggleShowHelpCenter}
            onMouseLeave={toggleShowHelpCenter}
          >
              <Link href="/help" className="text-white hover:text-purple-300">
                <span className="cursor-pointer text-white">Help Center</span>
              </Link>
              {showHelpCenter && <HelpCenter />}
          
          </li>
          <li>
            <Link href="/create" className="text-white hover:text-purple-300">
              Create
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={toggleDropdownProfile}
            onMouseLeave={toggleDropdownProfile}
          >
            <span className="cursor-pointer text-white">
              <Link href="/profile" passHref className= "hover:text-purple-300">
             Profile
              </Link>
            </span>
            {isDropdownProfileOpen && (
             <Profile /> 
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
