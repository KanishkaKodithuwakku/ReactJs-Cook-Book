import React from "react";


const SearchBar = ({ value, handleOnchangeSearch }) => { 

    return (
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Search..."
          onChange={handleOnchangeSearch}
          value={value}
        />
      </div>
    );

}

export default SearchBar;;
