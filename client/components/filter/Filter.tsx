import React, { useState } from 'react';

interface FiltersState {
  trending: boolean;
  new: boolean;
  collection: boolean;
  verified: boolean;
  onSale: boolean;
}

const FilterItem: React.FC<{ icon: React.ReactNode; title: string; onChange: () => void }> = ({ icon, title, onChange }) => {
  return (
    <div  className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-md shadow-md text-center">
    <label className="flex items-center cursor-pointer">
      <input type="checkbox" onChange={onChange} className="mr-2" />
      <span className="text-white">{icon}</span>
      <span className="text-white ml-2">{title}</span>
    </label>
    </div>
  );
};

const Filter: React.FC = () => {
  const [filters, setFilters] = useState<FiltersState>({
    trending: false,
    new: false,
    collection: false,
    verified: false,
    onSale: false,
  });

  const handleFilterChange = (filter: keyof FiltersState) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filter]: !prevFilters[filter] }));
  };

  return (
    <div className="container mx-auto mt-8 flex items-center justify-between">
      <FilterItem icon="🔥" title="Trending" onChange={() => handleFilterChange('trending')} />
      <FilterItem icon="🆕" title="New" onChange={() => handleFilterChange('new')} />
      <FilterItem icon="🖼️" title="Collection" onChange={() => handleFilterChange('collection')} />
      <FilterItem icon="✔️" title="Verified" onChange={() => handleFilterChange('verified')} />
      <FilterItem icon="💲" title="On Sale" onChange={() => handleFilterChange('onSale')} />
    </div>
  );
};

export default Filter;
