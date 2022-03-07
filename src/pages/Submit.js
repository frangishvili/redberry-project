import React from "react";
import { Link } from "react-router-dom";
import styles from "./Submit.module.css";

const Submit = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Submit</button>

      <Link to="/devtalks" className={styles.aplications__link}>
        go back
      </Link>
    </div>
  );
};

export default Submit;
