import String from "../Metotlar/StringMetot";
import Number from "../Metotlar/NumberMetot";
import Array from "../Metotlar/ArrayMetot";
import styles from "./Searchbar.module.css";
const SearchBar = (props) => {
  return (
    <div className={styles.listWrapper}>
      {String.filter((val) => val.id.toLowerCase().includes(props.send.toLowerCase())).slice(0,3).map(
        (val, key) => {
          return (
            <div onClick={()=> props.onInputVal(val.id)} className={styles.list} key={key} >
              {val.id}
            </div>
          );
        }
      )}
      {Number.filter((val) => val.id.toLowerCase().includes(props.send.toLowerCase())).slice(0,3).map(
        (val, key) => {
          return (
            <div onClick={()=> props.onInputVal(val.id)} className={styles.list} key={key} >
              {val.id}
            </div>
          );
        }
      )}
      {Array.filter((val) => val.id.toLowerCase().includes(props.send.toLowerCase())).slice(0,3).map(
        (val, key) => {
          return (
            <div onClick={()=> props.onInputVal(val.id)} className={styles.list} key={key} >
              {val.id}
            </div>
          );
        }
      )}
    </div>
  );
};

export default SearchBar;
