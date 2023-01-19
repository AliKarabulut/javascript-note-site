import String from "../Metotlar/StringMetot";
import Number from "../Metotlar/NumberMetot";
import Array from "../Metotlar/ArrayMetot";
import styles from "./Search.module.css";
import { Fragment, useContext, useEffect, useState } from "react";
import StartStore from "../store/store";

const Search = (props) => {
  const {metotlar} = useContext(StartStore);
  const [search, setSearch] = useState("");


  // useEffect(() => {
  //   const list = [];
  //   if (list.length < 0) {
  //     String.map((item, key) => list.push);
  //   }
  // }, []);

  // const inputClickHandler = () => {
  //   ctx.metotlar({id:})
  // };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputwrapper}>
        <input
          // onClick={inputClickHandler}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className={styles.search}
          type="text"
          placeholder="Ara"
        />
        <i className={styles.icon}></i>
      </div>
      {String.filter((val) => {
          if (search == "") {
            return val;
          } else if (val.id.toLowerCase().includes(search)) {
            return val;
          }
        }).map((val, key) => {
          return (
            <div  className={styles.listStyle} key={key}>
              <p onClick={metotlar.push(val)}>{val.id}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Search;
