import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Covid.module.css";

const Covid = () => {
  const [workPreference, setWorkPreference] = useState("");
  const [covid, setCovid] = useState("");
  const [hadCovidAt, setHadCovidAt] = useState("");
  const [vaccinated, setVaccinated] = useState("");
  const [vaccinatedAt, setVaccinatedAt] = useState("");
  const [formIsValid, setFormIsValid] = useState("");

  const ref1 = useRef();
  const ref2 = useRef();

  useEffect(() => {
    if (workPreference !== "" && covid === "false" && vaccinated === "false") {
      setFormIsValid(true);
    } else if (
      workPreference !== "" &&
      covid === "true" &&
      hadCovidAt !== "" &&
      vaccinated === "true" &&
      vaccinatedAt !== ""
    ) {
      setFormIsValid(true);
    } else if (
      workPreference !== "" &&
      covid === "true" &&
      hadCovidAt !== "" &&
      vaccinated === "false" &&
      vaccinatedAt === ""
    ) {
      setFormIsValid(true);
    } else if (
      workPreference !== "" &&
      covid === "false" &&
      hadCovidAt === "" &&
      vaccinated === "true" &&
      vaccinatedAt !== ""
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [workPreference, covid, hadCovidAt, vaccinated, vaccinatedAt]);
  const workPreferenceHander = (event) => {
    setWorkPreference(event.target.value);
    console.log(event.target.value);

    localStorage.setItem("work_preference", event.target.value);
  };
  const covidHandler = (event) => {
    setCovid(event.target.value);
    console.log(typeof event.target.value);
    localStorage.setItem("had_covid", event.target.value);
  };

  const hadCovidAtHander = (event) => {
    setHadCovidAt(event.target.value);
    localStorage.setItem("had_covid_at", event.target.value);
  };
  const vaccinatedHandler = (event) => {
    setVaccinated(event.target.value);
    localStorage.setItem("vactinated", event.target.value);
  };
  const vaccinatedAtHandler = (event) => {
    setVaccinatedAt(event.target.value);
    localStorage.setItem("vactinated_at", event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.covidInfo}>
        <h1>Covid Stuff</h1>

        <div className={styles.questions__container}>
          <p className={styles.question}>how would you prefer to work?</p>

          <div className={styles.radio_btn}>
            <input
              type="radio"
              name="radio"
              className={styles.radio__input}
              onChange={workPreferenceHander}
              value="from_office"
              required
            />
            <label>From Sairme Office</label>
          </div>
          <div className={styles.radio_btn}>
            <input
              type="radio"
              name="radio"
              className={styles.radio__input}
              onChange={workPreferenceHander}
              value="from_home"
              required
            />
            <label>From Home</label>
          </div>
          <div className={styles.radio_btn}>
            <input
              type="radio"
              name="radio"
              className={styles.radio__input}
              onChange={workPreferenceHander}
              value="hybrid"
              required
            />
            <label>Hybrid</label>
          </div>

          <p className={styles.question}>Did you contact covid 19? :(</p>

          <div className={styles.radio_btn}>
            <input
              type="radio"
              name="radio1"
              className={styles.radio__input}
              onChange={covidHandler}
              value={true}
              required
            />
            <label>Yes</label>
          </div>
          <div className={styles.radio_btn}>
            <input
              type="radio"
              name="radio1"
              className={styles.radio__input}
              onChange={covidHandler}
              value={false}
              required
            />
            <label>No</label>
          </div>
          {covid === "true" ? (
            <>
              <p className={styles.question}>When?</p>

              <div className={styles.input__wrapper}>
                <input
                  className={styles.date__input}
                  type="text"
                  placeholder="Date"
                  ref={ref1}
                  onFocus={() => (ref1.current.type = "date")}
                  value={hadCovidAt}
                  onChange={hadCovidAtHander}
                />
                <img
                  src="/assets/calendar.png"
                  className={styles.calendar__img}
                  alt="calendar img"
                />
              </div>
            </>
          ) : (
            ""
          )}
          <p className={styles.question}>Have you been vaccinated?</p>

          <div className={styles.radio_btn}>
            <input
              type="radio"
              name="radio2"
              className={styles.radio__input}
              onChange={vaccinatedHandler}
              value={true}
              required
            />
            <label>Yes</label>
          </div>
          <div className={styles.radio_btn}>
            <input
              type="radio"
              name="radio2"
              className={styles.radio__input}
              onChange={vaccinatedHandler}
              value={false}
              required
            />
            <label>No</label>
          </div>
          {vaccinated === "true" ? (
            <>
              <p className={styles.question}>
                When did you get your last covid vaccine?
              </p>

              <div className={styles.input__wrapper}>
                <input
                  className={styles.date__input}
                  type="text"
                  placeholder="Date"
                  ref={ref2}
                  onFocus={() => (ref2.current.type = "date")}
                  value={vaccinatedAt}
                  onChange={vaccinatedAtHandler}
                  required
                />
                <img
                  src="/assets/calendar.png"
                  className={styles.calendar__img}
                  alt="calendar img"
                />
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <div className={styles.pagination}>
          <Link to="/tech-skills">
            <img
              src="/assets/Previous.png"
              className={styles.left_arrow}
              alt=" arrow img"
            />
          </Link>
          <Link to="/personal-info">
            <img src="/assets/Ellipse1.png" alt="  img" />
          </Link>
          <Link to="/tech-skills">
            <img src="/assets/Ellipse1.png" alt="  img" />
          </Link>
          <img src="/assets/Ellipse1.png" alt="  img" />
          <img src="/assets/Ellipse2.png" alt="  img" />
          <img src="/assets/Ellipse2.png" alt="  img" />
          {formIsValid ? (
            <Link to="/devtalks">
              <button type="submit" className={styles.right_arrow}>
                <img src="/assets/Next.png" alt=" arrow img" />
              </button>
            </Link>
          ) : (
            <button type="submit" className={styles.right_arrow}>
              <img src="/assets/Next.png" alt=" arrow img" />
            </button>
          )}
        </div>
      </form>
      <div className={styles.info}>
        <h2>Redberry Covid Policies</h2>
        <p className={styles.question}>
          As this infamous pandemic took over the world, we adjusted our working
          practices so that our employees can be as safe and comfortable as
          possible. We have a hybrid work environment, so you can either work
          from home or visit our lovely office on Sairme Street. If it was up to
          us, we would love you to see us in the office because we think
          face-to-face communications Zoom meetings. Both on the fun and
          productivity scales.
        </p>
      </div>
    </div>
  );
};

export default Covid;
