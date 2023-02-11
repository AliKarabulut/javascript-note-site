import String from "../Metotlar/StringMetot";
import Number from "../Metotlar/NumberMetot";
import Array from "../Metotlar/ArrayMetot";
import styles from "./Searchbar.module.css";

const SearchBar = (props) => {
  const { send } = props;
  const sendLower = send.toLowerCase();
  const filteredArray = [].concat(
    String.filter((val) => val.id.toLowerCase().includes(sendLower)),
    Number.filter((val) => val.id.toLowerCase().includes(sendLower)),
    Array.filter((val) => val.id.toLowerCase().includes(sendLower))
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
