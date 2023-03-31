import { useDispatch, useSelector } from "react-redux";
import { metotActions } from "../../store/store";
import { useEffect, useState } from "react";

import styles from "./Searchbar.module.css";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = (props) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(0);
  const stringMetotlar = useSelector((state) => state.store.stringMetotlar);
  const arrayMetotlar = useSelector((state) => state.store.arrayMetotlar);
  const numberMetotlar = useSelector((state) => state.store.numberMetotlar);
  const navigate = useNavigate();
  const barClickHandler = (e) => {
    
    props.onInputVal(e.value);
    dispatch(metotActions.addMetotHeader(e.type))
    navigate("/" + e.type + "/" + e.value);
  };

  const sendLower = props.send.toLowerCase();
  const filteredArray = [].concat(
    stringMetotlar
      .filter((val) => val.toLowerCase().includes(sendLower))
      .map((val) => ({ value: val, type: "string" })),
    arrayMetotlar
      .filter((val) => val.toLowerCase().includes(sendLower))
      .map((val) => ({ value: val, type: "array" })),
    numberMetotlar
      .filter((val) => val.toLowerCase().includes(sendLower))
      .map((val) => ({ value: val, type: "number" }))
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
              to={filteredArray[i].type + "/" + filteredArray[i].value}
              onClick={barClickHandler.bind(null, filteredArray[i])}
              className={`${styles.list} ${i === selected && styles.selected}`}
              key={i}
            >
              {filteredArray[i].type + ": " + filteredArray[i].value}
            </Link>
          );
        }
        return components;
      })()}
    </div>
  );
};

export default SearchBar;
