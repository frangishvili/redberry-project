import React, { useRef } from "react";
import styles from "./Covid.module.css";
import img from "../assets/calendar.png";

const Covid = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  return (
    <div className={styles.container}>
      <div className={styles.covidInfo}>
        <h1>Covid Stuff</h1>

        <div className={styles.questions__container}>
          <p>how would you prefer to work?</p>

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

          <p>Did you contact covid 19? :(</p>

          <div className={styles.radio_btn}>
            <input type="radio" name="radio" className={styles.radio__input} />
            <label>Yes</label>
          </div>
          <div className={styles.radio_btn}>
            <input type="radio" name="radio" className={styles.radio__input} />
            <label>No</label>
          </div>

          <p>When?</p>

          <div className={styles.input__wrapper}>
            <input
              className={styles.date__input}
              type="text"
              placeholder="Date"
              ref={ref1}
              onFocus={() => (ref1.current.type = "date")}
              //   onBlur={() => (ref.current.type = "text")}
            />
            <img
              src={img}
              className={styles.calendar__img}
              alt="calendar img"
            />
          </div>

          <p>Have you been vaccinated?</p>

          <div className={styles.radio_btn}>
            <input type="radio" name="radio" className={styles.radio__input} />
            <label>Yes</label>
          </div>
          <div className={styles.radio_btn}>
            <input type="radio" name="radio" className={styles.radio__input} />
            <label>No</label>
          </div>

          <p>When did you get your last covid vaccine?</p>

          <div className={styles.input__wrapper}>
            <input
              className={styles.date__input}
              type="text"
              placeholder="Date"
              ref={ref2}
              onFocus={() => (ref2.current.type = "date")}
              //   onBlur={() => (ref.current.type = "text")}
            />
            <img
              src={img}
              className={styles.calendar__img}
              alt="calendar img"
            />
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <h2>Redberry Covid Policies</h2>
        <p>
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
