import String from "../Metotlar/StringMetot";
import Number from "../Metotlar/NumberMetot";
import Array from "../Metotlar/ArrayMetot";
import styles from './Searchbar.module.css'
const SearchBar = (props) => {
  return (
    <div className={styles.listWrapper}>
      {String.filter((val) => val.id.toLowerCase().includes(props.send))
      .map((val, key) => {
        return (
          <div className={styles.list} key={key}>
            <p>{val.id}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SearchBar;
