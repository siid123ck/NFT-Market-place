// components/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your NFT Marketplace</h1>
        <p className="text-lg mb-8">Discover, collect and sell unique NFTs from various creators.</p>
        <button className="bg-white text-purple-700 py-2 px-4 rounded-md">Get Started</button>
      </div>
    </div>
  );
};

export default HeroSection;
