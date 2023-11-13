// components/help/HelpCenter.tsx
import Link from 'next/link';

const HelpCenter: React.FC = () => {
  return (
    <div className="absolute top-6 bg-white p-2 rounded shadow-md p-2 flex flex-col text-purple-700" style={{ width: '139px' }}>
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
  );
};

export default HelpCenter;
