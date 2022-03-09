import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Submit.module.css";
import Thanck from "./Thancks";

const Submit = () => {
  const [showPage, setShowPage] = useState(false);
  const userData = {
    token: "5513eb26-fa8f-48ed-b969-1ceb5f9a9ee7",
    first_name: localStorage.getItem("name"),
    last_name: localStorage.getItem("lastname"),
    email: localStorage.getItem("email"),
    phone: localStorage.getItem("phoneNumber"),
    skills: JSON.parse(localStorage.getItem("skills")),
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

  const submitHandler = (event) => {
    event.preventDefault();

    fetch("https://bootcamp-2022.devtest.ge/api/application", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
    })
      .then((res) => res.json())
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));

    localStorage.clear();
    setShowPage(true);
  };

  return showPage ? (
    <Thanck />
  ) : (
    <div className={styles.container}>
      <button type="submit" className={styles.button} onClick={submitHandler}>
        Submit
      </button>

      <Link to="/devtalks" className={styles.aplications__link}>
        go back
      </Link>
    </div>
  );
};

export default Submit;

// skills: [
//   {
//     id: localStorage.getItem("id"),
//     experience: localStorage.getItem("experience"),
//   },
// ],
