import React from "react";
import styles from "./Skill.module.css";

const Skill = ({ skills, skill, setSkills }) => {
  const removeSkill = (id) => {
    const removedArr = [...skills].filter((todo) => todo.id !== id);
    setSkills(removedArr);
  };

  return (
    <div className={styles.container}>
      <div className={styles.language}>{skill.language}</div>
      <div className={styles.experience}>{skill.experience}</div>
      <div className="icons">
        <img
          src="/assets/Remove.png"
          onClick={() => removeSkill(skill.id)}
          className={styles.delete__icon}
          alt="remove icon"
        />
      </div>
    </div>
  );
};

export default Skill;
