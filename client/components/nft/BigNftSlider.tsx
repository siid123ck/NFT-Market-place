import React from 'react';

const BigNftSlider: React.FC = () => {
  const sampleData = {
    id: '1',
    title: 'Your NFT Title',
    image: 'url-to-creator-image',
    collection: 'NFT Collection',
    likes: 100,
    price: 0.05,
    endDate: new Date('2023-12-31T23:59:59'),
    nftImage: 'url-to-nft-image',
    time: { days: 5, hours: 12, minutes: 30, seconds: 15 },
  };

  return (
    <div className="flex justify-between items-center bg-gradient-to-r
    w-full from-purple-600 to-indigo-600 text-white p-4">
      {/* Section 1: Left */}
      <div className="flex-1 pr-4">
        <h2 className="text-3xl font-bold mb-2">{sampleData.title}</h2>
        <div className="mb-4">
          <img src={sampleData.nftImage} alt="NFT" className="rounded-lg shadow-md" />
        </div>
        <div className="flex items-center mb-4">
          <img src={sampleData.image} alt="Creator Profile" className="w-10 h-10 rounded-full mr-2" />
          <span>{sampleData.collection}</span>
        </div>
        <div className="mb-4">
          <span className="mr-2">Likes: {sampleData.likes}</span>
          <span>Price: {sampleData.price} ETH</span>
        </div>
        <div className="mb-4">
          <span>
            Time Remaining: {sampleData.time.days}d {sampleData.time.hours}h {sampleData.time.minutes}m {sampleData.time.seconds}s
          </span>
        </div>
        {/* Add your slider icons here */}
        <div className="flex space-x-4">
          <span key="slider-left">Slider Left Icon</span>
          <span key="slider-right">Slider Right Icon</span>
        </div>
      </div>

      {/* Section 2: Right */}
      <div className="flex-1 pl-4">
        <img src={sampleData.image} alt="NFT" className="rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default BigNftSlider;
