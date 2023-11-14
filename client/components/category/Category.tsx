import React from 'react';

const CategoryCard: React.FC<{ image: string; title: string; subtitle: string }> = ({ image, title, subtitle }) => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-md shadow-md text-center">
      <img src={image} alt={title} className="mb-4 rounded-lg shadow-md" />
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white">{subtitle}</p>
    </div>
  );
};

const Category: React.FC = () => {
  const categories = [
    {
      image: 'url-to-image1',
      title: 'Digital Art',
      subtitle: 'Discover unique digital art NFTs.',
    },
    {
      image: 'url-to-image2',
      title: 'Collectibles',
      subtitle: 'Collect rare and valuable NFT collectibles.',
    },
    {
      image: 'url-to-image3',
      title: 'Virtual Real Estate',
      subtitle: 'Invest in virtual real estate NFTs.',
    },
    {
      image: 'url-to-image4',
      title: 'Gaming',
      subtitle: 'Explore NFTs related to the gaming industry.',
    },
    {
      image: 'url-to-image5',
      title: 'Music',
      subtitle: 'Own exclusive music-related NFTs.',
    },
    {
      image: 'url-to-image6',
      title: 'Sports',
      subtitle: 'Get NFTs from the world of sports.',
    },
    // Add more categories as needed
  ];

  return (
    <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-8">
      {categories.map((category, index) => (
        <CategoryCard key={index} image={category.image} title={category.title} subtitle={category.subtitle} />
      ))}
    </div>
  );
};

export default Category;
