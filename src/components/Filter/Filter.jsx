import FilterCSS from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = (value, handleChange) => {
  return (
    <label className={FilterCSS.label}>
      Find contacts by Name
      <input
        className={FilterCSS.input}
        type="text"
        name="filter"
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
