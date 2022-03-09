import React, { useState, useEffect } from "react";
import styles from "./ApplicationList.module.css";
import AplicationContent from "./AplicationContent";

const App = () => {
  const [userData, setUserData] = useState([]);

  const getUsers = async () => {
    const response = await fetch(
      "https://bootcamp-2022.devtest.ge/api/applications?token=5513eb26-fa8f-48ed-b969-1ceb5f9a9ee7",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const result = await response.json();
    setUserData(result);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <React.Fragment>
      <div className={styles.container}>
        <h1>Submitted Applications</h1>

        {userData.map((item, index) => (
          <AplicationContent item={item} index={index} key={index} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default App;
