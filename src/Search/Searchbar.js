import { useDispatch } from "react-redux";
import { metotActions } from "../store/store";
import { useEffect, useState } from "react";
import String from "../Metotlar/StringMetot";
import Number from "../Metotlar/NumberMetot";
import Array from "../Metotlar/ArrayMetot";
import styles from "./Searchbar.module.css";
import { Link } from "react-router-dom";

const SearchBar = (props) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(0);

  const barClickHandler = (e) => {
    dispatch(metotActions.addmetot(e));
    dispatch(metotActions.addMetotHeader(e.name));
    props.onInputVal(e.id);
  };

  const sendLower = props.send.toLowerCase();
  const filteredArray = [].concat(
    String.filter((val) => val.id.toLowerCase().includes(sendLower)),
    Number.filter((val) => val.id.toLowerCase().includes(sendLower)),
    Array.filter((val) => val.id.toLowerCase().includes(sendLower))
  );

  const handleKeyDown = (event) => {
    switch (event.key) {
      case "ArrowUp":
        setSelected((prev) => (prev > 0 ? prev - 1 : prev));
        break;
      case "ArrowDown":
        setSelected((prev) =>
          prev < filteredArray.length - 1 && prev < 4 ? prev + 1 : prev
        );
        break;
      case "Enter":
        barClickHandler(filteredArray[selected]);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className={styles.listWrapper}>
      {(() => {
        let components = [];
        for (let i = 0; i < 5 && i < filteredArray.length; i++) {
          components.push(
            <Link
              to={filteredArray[i].id}
              onClick={barClickHandler.bind(null, filteredArray[i])}
              className={`${styles.list} ${i === selected && styles.selected}`}
              key={i}
            >
              {filteredArray[i].id}
            </Link>
          );
        }
        return components;
      })()}
    </div>
  );
};

export default SearchBar;
