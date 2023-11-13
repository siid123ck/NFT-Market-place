import Link from 'next/link'
import React from 'react'

const Profile = () => {
  return (
    <div className="absolute top-6  bg-white p-2 rounded shadow-md p-2 
    flex flex-col text-purple-700" style={{width:'139px'}}>
      {/* Assuming these are your dropdown items */}
      <div>Profile Pic</div>
      <Link href="/myprofile" passHref>
        My Profile
      </Link>
      <Link href="/myitems" passHref>
        My Items
      </Link>
      <Link href="/editprofile" passHref>
        Edit Profile
      </Link>
      <Link href="/help" passHref>
        Help
      </Link>
      <Link href="/logout" passHref>
        Logout
      </Link>
    </div>
  )
}

export default Profile