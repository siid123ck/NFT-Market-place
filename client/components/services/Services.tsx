// components/ServicesSection.tsx
import React from 'react';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-md shadow-md text-center text-white m-4">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <div className="container mx-auto mt-12 flex justify-evenly">
      <ServiceCard
        icon={<span role="img" aria-label="filter">🔍</span>}
        title="Filter and Discover"
        description="Explore a wide range of NFTs using advanced filtering options."
      />
      <ServiceCard
        icon={<span role="img" aria-label="filter">🔍</span>}
        title="Filter and Discover 2"
        description="Discover even more unique NFTs with enhanced filtering features."
      />
      <ServiceCard
        icon={<span role="img" aria-label="wallet">💼</span>}
        title="Connect Wallet"
        description="Securely connect your digital wallet to start trading and collecting."
      />
      <ServiceCard
        icon={<span role="img" aria-label="trade">💹</span>}
        title="Start Trading"
        description="Initiate trades, buy, and sell NFTs with ease in our marketplace."
      />
    </div>
  );
};

export default ServicesSection;
