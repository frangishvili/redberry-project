import React from "react";
import styles from "./Covid.module.css";

const Covid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.personalInfo}>
        <h1>Hey, Rocketeer, what are your coordinates?</h1>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="E Mail" />
        <input type="number" placeholder="+995 5_ _ _ _" />
      </div>
      <div className={styles.info}>
        <h2>Redberry Origins</h2>
        <p>
          You watch “What? Where? When?” Yeah. Our founders used to play it.
          That’s where they got a question about a famous American author and
          screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
          exact name and he answered Ray Redberry. And at that moment, a name
          for a yet to be born company was inspired - Redberry 😇
        </p>
      </div>
    </div>
  );
};

export default Covid;
