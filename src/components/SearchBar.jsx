import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "../components/ui/input";

const SearchBar = ({ value, onChange }) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <div className="relative mb-12 max-w-2xl mx-auto">
      <div className={`relative transform transition-all duration-300 ${isFocused ? 'scale-105' : 'scale-100'}`}>
        <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${isFocused ? 'text-blue-500' : 'text-gray-400'}`} />
        <Input
          type="text"
          placeholder="Search events by name or location..."
          className="pl-12 py-6 text-lg rounded-xl shadow-lg focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  );
};

export default SearchBar;