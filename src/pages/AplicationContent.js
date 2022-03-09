import React, { useState } from "react";
import styles from "./AplicationContent.module.css";

const AplicationContent = ({ item, index }) => {
  const [isActive, setIsActive] = useState(false);

  const phpExperience = item.skills.map((item) =>
    item.id === 3 ? item.experience : ""
  );
  const reactExperience = item.skills.map((item) =>
    item.id === 5 ? item.experience : ""
  );

  return (
    <div className={styles.accordion}>
      <div className={styles.accordion_item}>
        <div
          className={styles.accordion_header}
          onClick={() => setIsActive(!isActive)}
        >
          <div className={styles.accordion_title}>{index + 1}</div>
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
                  <p>{item.first_name}</p>
                </div>
                <div className={styles.pers_item}>
                  <p>Last Name</p>
                  <p>{item.first_name}</p>
                </div>
                <div className={styles.pers_item}>
                  <p>E mail</p>
                  <p>{item.email}</p>
                </div>
                <div className={styles.pers_item}>
                  <p>Phone</p>
                  <p>{item.phone}</p>
                </div>
              </div>
              <div className={styles.skillset}>
                <h2 className={styles.title}>Skiilset</h2>
                <div className={styles.pers_item}>
                  <p>PHP</p>
                  <p>Years of Experience:{phpExperience}</p>
                </div>
                <div className={styles.pers_item}>
                  <p>React</p>
                  <p>Years of Experience:{reactExperience}</p>
                </div>
              </div>
            </div>
            <div className={styles.info_container}>
              <div className={styles.covid_container}>
                <h2 className={styles.title}>Covid Situation</h2>
                <p className={styles.question}>how would you prefer to work?</p>
                <div className={styles.radio_btn}>
                  <input
                    type="radio"
                    name="radio"
                    className={styles.radio__input}
                    defaultValue="From Sairme Office"
                    defaultChecked={"from_office" === item.work_preference}
                    disabled
                  />
                  <label>From Sairme Office</label>
                </div>
                <div className={styles.radio_btn}>
                  <input
                    type="radio"
                    name="radio"
                    className={styles.radio__input}
                    defaultValue="from_home"
                    defaultChecked={"from_home" === item.work_preference}
                    disabled
                  />
                  <label>From Home</label>
                </div>
                <div className={styles.radio_btn}>
                  <input
                    type="radio"
                    name="radio"
                    className={styles.radio__input}
                    defaultValue="hybrid"
                    defaultChecked={"hybrid" === item.work_preference}
                    disabled
                  />
                  <label>Hybrid</label>
                </div>
                <p className={styles.question}>Did you contact covid 19? :(</p>
                <div className={styles.radio_btn}>
                  <input
                    type="radio"
                    name="radio1"
                    className={styles.radio__input}
                    defaultValue={true}
                    defaultChecked={true === item.had_covid}
                    disabled
                  />
                  <label>Yes</label>
                </div>
                <div className={styles.radio_btn}>
                  <input
                    type="radio"
                    name="radio1"
                    className={styles.radio__input}
                    defaultValue={false}
                    defaultChecked={false === item.had_covid}
                    disabled
                  />
                  <label>No</label>
                </div>
                <>
                  <p className={styles.question}>When?</p>

                  <div className={styles.input__wrapper}>
                    <input
                      className={styles.date__input}
                      type="date"
                      defaultValue={item.had_covid_at.toString().substr(0, 10)}
                      disabled
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
                    defaultValue={true}
                    defaultChecked={true === item.vaccinated}
                    disabled
                  />
                  <label>Yes</label>
                </div>
                <div className={styles.radio_btn}>
                  <input
                    type="radio"
                    name="radio2"
                    className={styles.radio__input}
                    defaultValue={false}
                    defaultChecked={false === item.vaccinated}
                    disabled
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
                      defaultValue={item.vaccinated_at.toString().substr(0, 10)}
                      disabled
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
                  Would you attend Devtalks and maybe also organize your own?
                </p>
                <div className={styles.radio_btn}>
                  <input
                    type="radio"
                    name="radio4"
                    className={styles.radio__input}
                    defaultValue={true}
                    defaultChecked={true === item.will_organize_devtalk}
                    disabled
                  />
                  <label>Yes</label>
                </div>
                <div className={styles.radio_btn}>
                  <input
                    type="radio"
                    name="radio4"
                    className={styles.radio__input}
                    defaultValue={false}
                    defaultChecked={false === item.will_organize_devtalk}
                    disabled
                  />
                  <label>No</label>
                </div>
                <>
                  <p className={styles.question}>
                    What would you speak about at Devtalk?
                  </p>
                  <textarea
                    className={styles.textarea1}
                    defaultValue=""
                    placeholder={item.devtalk_topic}
                  />
                </>

                <p className={styles.question}>Tell us something special</p>
                <textarea
                  className={styles.textarea2}
                  defaultValue=""
                  placeholder={item.something_special}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AplicationContent;
