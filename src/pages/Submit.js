import React from "react";
import styles from "./Submit.module.css";

const Submit = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Submit</button>
      <a className={styles.aplications__link} href="/">
        go back
      </a>
    </div>
  );
};

export default Submit;
