import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Error.module.css";

function ErrorPage({ title, message }) {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (count === 0) {
      navigate("..");
    }
  }, [count, navigate]);


  

  return (
    <div className={styles.error}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.message}>{message}</p>
      <p className={styles.message}>{count} </p>
    </div>
  );
}

export default ErrorPage;
