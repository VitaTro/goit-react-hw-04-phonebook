import PropTypes from 'prop-types';

// const Filter = ({ filter, setFilter }) => {
//     const handleFilterChange = (evt) => {
//         setFilter(evt.target.value);
//     };
const Filter = ({ changeHandler }) => {
  return (
    <div>
      <div>
        <label>Find contacts by Name</label>
        <div>
          <input type="text" name="filter" onChange={changeHandler} />
        </div>
      </div>
    </div>
  );
};

Filter.propTypes = {
  changeHandler: PropTypes.func.isRequired,
};

export default Filter;
