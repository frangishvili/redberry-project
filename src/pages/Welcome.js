import React from "react";
import { Link } from "react-router-dom";
import styles from "./Welcome.module.css";

function Welcome() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome Rocketeer!</h1>
        <Link className={styles.link} to="/personal-info">
          <button className={styles.button}>Start Questionnaire</button>{" "}
        </Link>
        <Link className={styles.aplications__link} to="/applications">
          Submitted Applications
        </Link>
        <img src="/assets/rocketman.png" alt="rocketman img" />
      </div>
    </>
  );
}

export default Welcome;
