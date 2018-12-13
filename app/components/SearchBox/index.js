import React from 'react';
import PropTypes from 'prop-types';

const Searchbox = ({ searchClick, searchChange, placeholder }) => (
  <div>
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={searchChange}
    />
    <button onClick={searchClick}>search</button>
  </div>
);
export default Searchbox;

Searchbox.propTypes = {
  searchClick: PropTypes.func,
  searchChange: PropTypes.func,
  placeholder: PropTypes.string,
};
