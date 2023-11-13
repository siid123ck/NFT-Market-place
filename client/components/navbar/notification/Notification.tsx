import Link from 'next/link';
import React from 'react';

const Notification = () => {
  return (
    <div className="absolute top-6 bg-white p-2 rounded shadow-md p-2 flex flex-col text-purple-700" style={{ width: '200px' }}>
      <div className="font-bold mb-2">Notifications</div>
      {/* List of notifications */}
      <Link href="/notification/1" passHref>
        <div className="hover:text-purple-300">Notification 1</div>
      </Link>
      <Link href="/notification/2" passHref>
        <div className="hover:text-purple-300">Notification 2</div>
      </Link>
      <Link href="/notification/3" passHref>
        <div className="hover:text-purple-300">Notification 3</div>
      </Link>
      {/* Add more notifications as needed */}
    </div>
  );
};

export default Notification;
