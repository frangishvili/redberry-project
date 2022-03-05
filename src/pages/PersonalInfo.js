import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./PersonalInfo.module.css";

function PersonalInfo() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [inputIsValid, setInputIsValid] = useState({
    name: true,
    lastName: true,
    email: true,
    number: true,
  });

  const nameHandeler = (event) => {
    event.preventDefault();
    setName(() => event.target.value);
  };
  const lastNameHandeler = (event) => {
    event.preventDefault();
    setLastName(() => event.target.value);
  };
  const emailHandeler = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
    localStorage.setItem("email", event.target.value);
  };
  const numberHandeler = (event) => {
    event.preventDefault();
    setNumber(event.target.value);
    localStorage.setItem("number", event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    // const unvalidName =
    const unvalidLastName = lastName.trim().length <= 2;
    const unvalidEmail = email.includes("@");
    const unvalidNumber = number.slice(0, 4) === "+9955";
    if (name.trim().length <= 2) {
      setInputIsValid({ ...inputIsValid, name: false });
      console.log(inputIsValid);
      return;
    } else {
      localStorage.setItem("name", name);
      setInputIsValid({ ...inputIsValid, name: true });
    }
    // if (unvalidLastName) {
    //   setInputIsValid({ ...inputIsValid, lastName: false });
    //   console.log(inputIsValid);
    // } else {
    //   localStorage.setItem("lastname", lastName);
    //   setInputIsValid({ ...inputIsValid, lastName: true });
    // }
  };

  return (
    <div className={styles.container}>
      <div className={styles.personalInfo}>
        <form onSubmit={submitHandler} className={styles.form}>
          <h1>Hey, Rocketeer, what are your coordinates?</h1>
          <input
            type="text"
            value={name}
            onChange={nameHandeler}
            placeholder="First Name"
            required
          />
          {!inputIsValid.name && (
            <p className={styles.error}>
              first name should include 3 or more characters
            </p>
          )}
          <input
            type="text"
            value={lastName}
            className={styles.input}
            onChange={lastNameHandeler}
            placeholder="Last Name"
          />
          {!inputIsValid.lastName && (
            <p className={styles.error}>
              last name should include 3 or more characters
            </p>
          )}
          <input
            type="email"
            value={email}
            className={styles.input}
            onChange={emailHandeler}
            placeholder="E Mail"
          />
          <input
            type="number"
            value={number}
            className={styles.input}
            onChange={numberHandeler}
            placeholder="+995 5_ _ _ _"
          />
          <div className={styles.pagination}>
            <Link to="/welcome">
              <img
                src="/assets/Previous.png"
                className={styles.left_arrow}
                alt=" arrow img"
              />
            </Link>
            <img src="/assets/Ellipse1.png" alt="  img" />
            <img src="/assets/Ellipse2.png" alt="  img" />
            <img src="/assets/Ellipse2.png" alt="  img" />
            <img src="/assets/Ellipse2.png" alt="  img" />
            <img src="/assets/Ellipse2.png" alt="  img" />
            <Link to="/tech-skills">
              <button type="submit" className={styles.right_arrow}>
                <img src="/assets/Next.png" alt=" arrow img" />
              </button>
            </Link>
          </div>
        </form>
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
}

export default PersonalInfo;
