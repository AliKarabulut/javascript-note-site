
import styles from './Search.module.css'

const Search = (props) => {
  return (
    <div className={styles.inputwrapper}>
      <input className={styles.search} type="text" placeholder="Ara" />
      <i className={styles.icon}></i>
    </div>
  );
};

export default Search;
