import React, { useState } from "react";
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

  const { title, content } = accordionData;

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
                    <h2>Personal Information</h2>
                  </div>
                  <div className={styles.skillset}>
                    <h2>Skiilset</h2>
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
