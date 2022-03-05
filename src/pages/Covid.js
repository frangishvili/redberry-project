import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Covid.module.css";
// import img from "../assets/calendar.png";

const Covid = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  return (
    <div className={styles.container}>
      <div className={styles.covidInfo}>
        <h1>Covid Stuff</h1>

        <div className={styles.questions__container}>
          <p className={styles.question}>how would you prefer to work?</p>

          <div className={styles.radio_btn}>
            <input type="radio" name="radio" className={styles.radio__input} />
            <label>From Sairme Office</label>
          </div>
          <div className={styles.radio_btn}>
            <input type="radio" name="radio" className={styles.radio__input} />
            <label>From Home</label>
          </div>
          <div className={styles.radio_btn}>
            <input type="radio" name="radio" className={styles.radio__input} />
            <label>Hybrid</label>
          </div>

          <p className={styles.question}>Did you contact covid 19? :(</p>

          <div className={styles.radio_btn}>
            <input type="radio" name="radio" className={styles.radio__input} />
            <label>Yes</label>
          </div>
          <div className={styles.radio_btn}>
            <input type="radio" name="radio" className={styles.radio__input} />
            <label>No</label>
          </div>

          <p className={styles.question}>When?</p>

          <div className={styles.input__wrapper}>
            <input
              className={styles.date__input}
              type="text"
              placeholder="Date"
              ref={ref1}
              onFocus={() => (ref1.current.type = "date")}
            />
            <img
              src="/assets/calendar.png"
              className={styles.calendar__img}
              alt="calendar img"
            />
          </div>

          <p className={styles.question}>Have you been vaccinated?</p>

          <div className={styles.radio_btn}>
            <input type="radio" name="radio" className={styles.radio__input} />
            <label>Yes</label>
          </div>
          <div className={styles.radio_btn}>
            <input type="radio" name="radio" className={styles.radio__input} />
            <label>No</label>
          </div>

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
            />
            <img
              src="/assets/calendar.png"
              className={styles.calendar__img}
              alt="calendar img"
            />
            <div className={styles.pagination}>
              <Link to="/tech-skills">
                <img
                  src="/assets/Previous.png"
                  className={styles.left_arrow}
                  alt=" arrow img"
                />
              </Link>
              <img src="/assets/Ellipse1.png" alt="  img" />
              <img src="/assets/Ellipse1.png" alt="  img" />
              <img src="/assets/Ellipse1.png" alt="  img" />
              <img src="/assets/Ellipse2.png" alt="  img" />
              <img src="/assets/Ellipse2.png" alt="  img" />
              <Link to="/devtalks">
                <button type="submit" className={styles.right_arrow}>
                  <img src="/assets/Next.png" alt=" arrow img" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
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
