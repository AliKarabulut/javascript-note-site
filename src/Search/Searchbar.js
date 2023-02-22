import { useDispatch } from "react-redux";
import { metotActions } from "../store/store";
import String from "../Metotlar/StringMetot";
import Number from "../Metotlar/NumberMetot";
import Array from "../Metotlar/ArrayMetot";
import styles from "./Searchbar.module.css";

const SearchBar = (props) => {
  const dispatch = useDispatch();

  const barClickHandler = (e) => {
    console.log(e);
    dispatch(metotActions.addmetot(e));
    dispatch(metotActions.addMetotHeader(e.name));
    props.onInputVal(e.id);
  };

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
              onClick={barClickHandler.bind(null, filteredArray[i])}
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
