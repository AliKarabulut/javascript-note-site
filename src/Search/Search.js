import { useState } from "react";
import styles from "./Search.module.css";
import SearchBar from "./Searchbar";

const Search = (props) => {
  const [inputVal, setInputVal] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const addToInputVal = (props) =>{
    setIsFocused(false)
    setInputVal(props)
  }
  
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.inputwrapper} ${isFocused ? styles.borderHalf : styles.borderFull}`}>
        <input
          onChange={(e) => {
            setInputVal(e.target.value);
            
          }}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setTimeout(() => {
              setIsFocused(false)
            }, 100);
            ;
          }}
          className={styles.search}
          value={inputVal}
          type="text"
          placeholder="Ara"
        />
        <i className={styles.icon}></i>
      </div>
      {isFocused && <SearchBar send={inputVal} onInputVal={addToInputVal}/>}
    </div>
  );
};

export default Search;
