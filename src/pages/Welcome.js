import React from "react";
import styles from "./Welcome.module.css";
import img from "../assets/rocketman.png";

function Welcome() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome Rocketeer!</h1>
      <button className={styles.button}>Start Questionnaire</button>
      <a className={styles.aplications__link} href="/">
        Submitted Applications
      </a>
      <img src={img} alt="rocketman img" />
    </div>
  );
}

export default Welcome;
