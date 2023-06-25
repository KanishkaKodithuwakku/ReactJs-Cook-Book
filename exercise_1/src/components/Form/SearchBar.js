import React from 'react';

const SearchBar = ({ value, handleOnChangeSearch }) => {
  return (
    <div className="form-group mt-4">
      <input
        className="form-control"
        placeholder="Search..."
        value={value}
        onChange={handleOnChangeSearch}
      />
    </div>
  );
};

export default SearchBar;
