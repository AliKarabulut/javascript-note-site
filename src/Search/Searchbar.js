import String from "../Metotlar/StringMetot";
import Number from "../Metotlar/NumberMetot";
import Array from "../Metotlar/ArrayMetot";
import styles from "./Searchbar.module.css";
const SearchBar = (props) => {
  const filteredArray = String.filter((val) =>
    val.id.toLowerCase().includes(props.send.toLowerCase())
  );

  return (
    <div className={styles.listWrapper}>
      {(() => {
        let components = [];
        for (let i = 0; i < 5 && i < filteredArray.length; i++) {
          components.push(
              <div
              onClick={() => props.onInputVal(filteredArray[i].id)}
              className={styles.list}
              key={i}
            >
              {filteredArray[i].id}
            </div>
          );
        }
        return components;
      })()}
    </div>
  );
};

export default SearchBar;

// {Number.filter((val) => val.id.toLowerCase().includes(props.send.toLowerCase())).slice(0,3).map(
//   (val, key) => {
//     return (
//       <div onClick={()=> props.onInputVal(val.id)} className={styles.list} key={key} >
//         {val.id}
//       </div>
//     );
//   }
// )}
// {Array.filter((val) => val.id.toLowerCase().includes(props.send.toLowerCase())).slice(0,3).map(
//   (val, key) => {
//     return (
//       <div onClick={()=> props.onInputVal(val.id)} className={styles.list} key={key} >
//         {val.id}
//       </div>
//     );
//   }
// )}
