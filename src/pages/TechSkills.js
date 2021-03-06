import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SkillsList from "../Components/SkillsList.js";
import styles from "./TechSkills.module.css";

const TechSkills = () => {
  const [data, setData] = useState([]);
  const [language, setLanguage] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState([]);
  const [localSkills, setLocalSkills] = useState([]);
  const [formIsValid, setformIsValid] = useState(false);

  useEffect(() => {
    if (skills.length > 0) {
      setformIsValid(true);
    } else {
      setformIsValid(false);
    }
  }, [skills]);

  const getUsers = async () => {
    const response = await fetch("https://bootcamp-2022.devtest.ge/api/skills");
    const result = await response.json();
    setData(result);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const langChangeHandler = (event) => {
    setLanguage(() => event.target.value);
  };

  const expChangeHandler = (event) => {
    setExperience(event.target.value);
  };
  // let userSkills = [];

  const addSkill = () => {
    if (language !== "" && experience > 0) {
      const newSkill = {
        language: language.slice(1),
        experience,
        id: language.slice(0, 1),
      };

      setSkills([newSkill, ...skills]);
      setLocalSkills([
        { id: Number(language.slice(0, 1)), experience: Number(experience) },
        ...localSkills,
      ]);

      setLanguage("");
      setExperience("");
    }
  };

  localStorage.setItem("skills", JSON.stringify(localSkills));

  const submitHandler = (event) => {
    event.preventDefault();
    addSkill();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.skills}>
        <h1>Tell us about your skills</h1>
        <select
          onChange={langChangeHandler}
          value={language}
          className="select"
        >
          <option value="" disabled hidden>
            Skills
          </option>
          {data.map((item) => (
            <option value={item.id + item.title} key={item.id}>
              {item.title}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Experience Duration in Years"
          onChange={expChangeHandler}
          value={experience}
        />
        <button
          type="submit"
          onClick={submitHandler}
          className={styles.add__btn}
        >
          Add Programming Language
        </button>
        <div className={styles.skills_container}>
          <SkillsList
            language={language}
            setLanguage={setLanguage}
            experience={experience}
            setExperience={setExperience}
            skills={skills}
            setSkills={setSkills}
          />
        </div>
        <div className={styles.pagination}>
          <Link to="/personal-info">
            <img src="/assets/Previous.png" alt=" arrow img" />
          </Link>
          <Link to="/personal-info">
            <img src="/assets/Ellipse1.png" alt="  img" />
          </Link>
          <img src="/assets/Ellipse1.png" alt="  img" />
          <img src="/assets/Ellipse2.png" alt="  img" />
          <img src="/assets/Ellipse2.png" alt="  img" />
          <img src="/assets/Ellipse2.png" alt="  img" />
          {formIsValid ? (
            <Link to="/covid-info">
              <button type="submit" className={styles.right_arrow}>
                <img src="/assets/Next.png" alt=" arrow img" />
              </button>
            </Link>
          ) : (
            <button className={styles.right_arrow}>
              <img src="/assets/Next.png" alt=" arrow img" />
            </button>
          )}
        </div>
      </form>

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
