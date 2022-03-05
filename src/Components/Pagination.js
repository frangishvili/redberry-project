import React from "react";
import styles from "./Pagination.module.css";

const Pagination = () => {
  return (
    <div className={styles.container}>
      <img src="/assets/Previous.png" alt=" arrow img" />
      <img src="/assets/Ellipse1.png" alt="  img" />
      <img src="/assets/Ellipse2.png" alt="  img" />
      <img src="/assets/Ellipse2.png" alt="  img" />
      <img src="/assets/Ellipse2.png" alt="  img" />
      <img src="/assets/Ellipse2.png" alt="  img" />
      <img src="/assets/Next.png" alt=" arrow img" />
    </div>
  );
};

export default Pagination;
