import React from "react";
import { Link } from "react-router-dom";
import styles from "./Submit.module.css";

const Submit = () => {
  const userData = {
    token: "84e2b863-774d-46c1-ad33-a3c43f5ab33e",
    first_name: localStorage.getItem("name"),
    last_name: localStorage.getItem("lastname"),
    email: localStorage.getItem("email"),
    phone: localStorage.getItem("phoneNumber"),
    skills: [
      {
        id: localStorage.getItem("id"),
        experience: localStorage.getItem("experience"),
      },
    ],
    work_preference: localStorage.getItem("work_preference"),
    had_covid: Boolean(localStorage.getItem("had_covid")),
    had_covid_at: new Date(localStorage.getItem("had_covid_at")),
    vaccinated: Boolean(localStorage.getItem("vactinated")),
    vaccinated_at: new Date(localStorage.getItem("vactinated_at")),
    will_organize_devtalk: Boolean(
      localStorage.getItem("will_organize_devtalk")
    ),
    devtalk_topic: localStorage.getItem("devtalk_topic"),
    something_special: localStorage.getItem("something_special"),
  };

  console.log(userData);
  console.log(typeof Boolean(localStorage.getItem("will_organize_devtalk")));

  const submitHandler = (event) => {
    event.preventDefault();
    fetch("https://bootcamp-2022.devtest.ge/api/application", {
      method: "POST",
      body: userData,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => console.log(res).catch((err) => console.log(err)));
  };
  const getUsersData = async () => {
    const response = await fetch(
      "https://bootcamp-2022.devtest.ge/api/applications"
    );
    const result = await response.json();
    console.log(result);
  };
  return (
    <div className={styles.container}>
      <button type="submit" className={styles.button} onSubmit={submitHandler}>
        Submit
      </button>
      <button type="submit" className={styles.button} onSubmit={getUsersData}>
        fetch
      </button>

      <Link to="/devtalks" className={styles.aplications__link}>
        go back
      </Link>
    </div>
  );
};

export default Submit;
