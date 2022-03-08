import React, { useState, useEffect } from "react";
import styles from "./ApplicationList.module.css";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const accordionData = {
    title: "Section 1",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
  };

  const { title } = accordionData;

  const getUsers = async () => {
    const response = await fetch(
      "https://bootcamp-2022.devtest.ge/api/application/json",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const result = await response.json();
    console.log(result);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <React.Fragment>
      <div className={styles.container}>
        <h1>Submitted Applications</h1>
        <div className={styles.accordion}>
          <div className={styles.accordion_item}>
            <div
              className={styles.accordion_header}
              onClick={() => setIsActive(!isActive)}
            >
              <div className={styles.accordion_title}>{title}</div>
              <div className={styles.accordion_toggler}>
                {isActive ? (
                  <img src="/assets/Vector2.png" alt="" />
                ) : (
                  <img src="/assets/Vector1.png" alt="" />
                )}
              </div>
            </div>
            {isActive && (
              <div className={styles.accordion_content}>
                <div className={styles.about_section}>
                  <div className={styles.personal_info}>
                    <h2 className={styles.title}> Personal Information</h2>
                    <div className={styles.pers_item}>
                      <p>First Name</p>
                      <p>from api</p>
                    </div>
                    <div className={styles.pers_item}>
                      <p>Last Name</p>
                      <p>from api</p>
                    </div>
                    <div className={styles.pers_item}>
                      <p>E mail</p>
                      <p>from api</p>
                    </div>
                    <div className={styles.pers_item}>
                      <p>Phone</p>
                      <p>from api</p>
                    </div>
                  </div>
                  <div className={styles.skillset}>
                    <h2 className={styles.title}>Skiilset</h2>
                    <div className={styles.pers_item}>
                      <p>PHP</p>
                      <p>from api</p>
                    </div>
                    <div className={styles.pers_item}>
                      <p>React</p>
                      <p>from api</p>
                    </div>
                  </div>
                </div>
                <div className={styles.info_container}>
                  <div className={styles.covid_container}>
                    <h2 className={styles.title}>Covid Situation</h2>
                    <p className={styles.question}>
                      how would you prefer to work?
                    </p>
                    <div className={styles.radio_btn}>
                      <input
                        type="radio"
                        name="radio"
                        className={styles.radio__input}
                        value="From Sairme Office"
                        required
                      />
                      <label>From Sairme Office</label>
                    </div>
                    <div className={styles.radio_btn}>
                      <input
                        type="radio"
                        name="radio"
                        className={styles.radio__input}
                        value="From home"
                        required
                      />
                      <label>From Home</label>
                    </div>
                    <div className={styles.radio_btn}>
                      <input
                        type="radio"
                        name="radio"
                        className={styles.radio__input}
                        value="Hybrid"
                        required
                      />
                      <label>Hybrid</label>
                    </div>
                    <p className={styles.question}>
                      Did you contact covid 19? :(
                    </p>
                    <div className={styles.radio_btn}>
                      <input
                        type="radio"
                        name="radio1"
                        className={styles.radio__input}
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
                        value={false}
                        required
                      />
                      <label>No</label>
                    </div>
                    <div className={styles.radio_btn}>
                      <input
                        type="radio"
                        name="radio1"
                        className={styles.radio__input}
                        value={false}
                        required
                      />
                      <label>No</label>
                    </div>
                    <>
                      <p className={styles.question}>When?</p>

                      <div className={styles.input__wrapper}>
                        <input
                          className={styles.date__input}
                          type="date"
                          placeholder="Date"
                          value="{hadCovidAt}"
                        />
                        <img
                          src="/assets/calendar.png"
                          className={styles.calendar__img}
                          alt="calendar img"
                        />
                      </div>
                    </>
                    <p className={styles.question}>Have you been vaccinated?</p>
                    <div className={styles.radio_btn}>
                      <input
                        type="radio"
                        name="radio2"
                        className={styles.radio__input}
                        value=""
                        required
                      />
                      <label>Yes</label>
                    </div>
                    <div className={styles.radio_btn}>
                      <input
                        type="radio"
                        name="radio2"
                        className={styles.radio__input}
                        value={false}
                        required
                      />
                      <label>No</label>
                    </div>
                    <>
                      <p className={styles.question}>
                        When did you get your last covid vaccine?
                      </p>

                      <div className={styles.input__wrapper}>
                        <input
                          className={styles.date__input}
                          type="date"
                          placeholder="Date"
                          value="12/12/2020"
                          required
                        />
                        <img
                          src="/assets/calendar.png"
                          className={styles.calendar__img}
                          alt="calendar img"
                        />
                      </div>
                    </>
                  </div>
                  <div className={styles.insigts_container}>
                    <h2 className={styles.title}>Insigts</h2>
                    <p className={styles.question}>
                      Would you attend Devtalks and maybe also organize your
                      own?
                    </p>
                    <div className={styles.radio_btn}>
                      <input
                        type="radio"
                        name="radio4"
                        className={styles.radio__input}
                        value=""
                      />
                      <label>Yes</label>
                    </div>
                    <div className={styles.radio_btn}>
                      <input
                        type="radio"
                        name="radio4"
                        className={styles.radio__input}
                        value=""
                      />
                      <label>No</label>
                    </div>
                    <>
                      <p className={styles.question}>
                        What would you speak about at Devtalk?
                      </p>
                      <textarea
                        className={styles.textarea1}
                        value=""
                        required
                        placeholder="I would..."
                      />
                    </>

                    <p className={styles.question}>Tell us something special</p>
                    <textarea
                      className={styles.textarea2}
                      value=""
                      required
                      placeholder="I..."
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
