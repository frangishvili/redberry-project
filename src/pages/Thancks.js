import React, { useState, useEffect } from "react";
import styles from "./Thanks.module.css";
import Welcome from "./Welcome";

const Thanck = () => {
  const [showPage, setShoePage] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShoePage(true);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return showPage ? (
    <Welcome />
  ) : (
    <div className={styles.container}>
      <h1 className={styles.title}>Thanks for Joining 😊</h1>
    </div>
  );
};

export default Thanck;
