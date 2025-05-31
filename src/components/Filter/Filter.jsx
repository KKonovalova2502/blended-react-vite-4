import { useDispatch, useSelector } from 'react-redux';
import style from './Filter.module.css';
import { changeFilter } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.text);

  const handleFilterChange = evt => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      onChange={handleFilterChange}
    />
  );
};

export default Filter;
