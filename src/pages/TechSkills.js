import React from "react";
import styles from "./TechSkills.module.css";

const TechSkills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.skills}>
        <h1>Tell us about your skills</h1>
        <select className="select">
          <option value="all todos">Skills</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
        <input type="text" placeholder="Experience Duration in Years" />
      </div>
      <div className={styles.info}>
        <h2>A bit about our battles</h2>
        <p>
          As we said, Redberry has been on the field for quite some time now,
          and we have touched and embraced a variety of programming languages,
          technologies, philosophies, and frameworks. We are battle-tested in
          PHP Laravel Stack with Vue.js, refined in React, and allies with
          Serverside technologies like Docker and Kubernetes, and now we have
          set foot in the web3 industry.
        </p>
      </div>
    </div>
  );
};

export default TechSkills;
