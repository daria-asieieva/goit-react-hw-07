import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <label className={styles.label}>
      Find contacts by name
      <input type="text" onChange={(e) => dispatch(changeFilter(e.target.value))} />
    </label>
  );
};

export default SearchBox;
