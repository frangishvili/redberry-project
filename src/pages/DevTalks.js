import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./DevTalk.module.css";

const DevTalks = () => {
  const [devTalk, setDevTalk] = useState("");
  const [topic, setTopic] = useState("");
  const [special, setSpecial] = useState("");
  const [formIsValid, setFormIsValid] = useState("");

  useEffect(() => {
    if (devTalk === "false" && special !== "") {
      setFormIsValid(true);
    } else if (devTalk === "true" && topic !== "" && special !== "") {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [devTalk, topic, special]);

  const devTalkHandler = (event) => {
    setDevTalk(event.target.value);
    localStorage.setItem("will_organize_devtalk", event.target.value);
  };
  const topicHandler = (event) => {
    setTopic(event.target.value);
    localStorage.setItem("devtalk_topic", event.target.value);
  };
  const specialHandler = (event) => {
    setSpecial(event.target.value);
    localStorage.setItem("something_special", event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className={styles.container}>
        <form onSubmit={submitHandler} className={styles.devTalks}>
          <h1>What about you?</h1>
          <div className={styles.questions__container}>
            <p className={styles.question}>
              Would you attend Devtalks and maybe also organize your own?
            </p>

            <div className={styles.radio_btn}>
              <input
                type="radio"
                name="radio"
                className={styles.radio__input}
                value={true}
                onChange={devTalkHandler}
              />
              <label>Yes</label>
            </div>
            <div className={styles.radio_btn}>
              <input
                type="radio"
                name="radio"
                className={styles.radio__input}
                value={false}
                onChange={devTalkHandler}
              />
              <label>No</label>
            </div>
            {devTalk === "true" ? (
              <>
                <p className={styles.question}>
                  What would you speak about at Devtalk?
                </p>
                <textarea
                  className={styles.textarea1}
                  onChange={topicHandler}
                  value={topic}
                  required
                  placeholder="I would..."
                />
              </>
            ) : (
              ""
            )}

            <p className={styles.question}>Tell us something special</p>

            <textarea
              className={styles.textarea2}
              onChange={specialHandler}
              value={special}
              required
              placeholder="I..."
            />
          </div>
          <div className={styles.pagination}>
            <Link to="/covid-info">
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
            <Link to="/covid-info">
              <img src="/assets/Ellipse1.png" alt="  img" />
            </Link>
            <img src="/assets/Ellipse1.png" alt="  img" />
            <img src="/assets/Ellipse2.png" alt="  img" />
            {formIsValid ? (
              <Link to="/submit">
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
          <h2>Redberrian Insights</h2>
          <p>
            We were soo much fun before the pandemic started! Parties almost
            every weekend and lavish employee birthday celebrations!
            Unfortunately, covid ruined that fun like it did almost everything
            else in the world. But we try our best to zhuzh it up a bit. For
            example, we host biweekly Devtalks where our senior and lead
            developers talk about topics they are passionate about. Previous
            topics have included Web3, NFT, Laravel 9, Kubernetes, etc. We hold
            these talks in the office but you can join our Zoom broadcast as
            well. Feel free to join either as an attendee or a speaker!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevTalks;
