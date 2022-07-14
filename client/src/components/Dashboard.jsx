import { Fragment, useState, useEffect } from "react";

import "../App.css";

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  async function getUserData() {
    try {
      const response = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseResponse = await response.json();
      setName(parseResponse.user_name);
      setId(parseResponse.user_id);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Fragment>
      <div className="main-container">
        <div className="left-aside"></div>
        <div className="main-content">
          <div className="message-container"></div>
          <div className="textbox-container"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
