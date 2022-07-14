import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../App.css";

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const body = { email, password };

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseResponse = await response.json();

      if (parseResponse.token) {
        localStorage.setItem("token", parseResponse.token);
        setAuth(true);
        toast.success("Login Successful!");
      } else {
        setAuth(false);
        toast.error(parseResponse);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className="container">
        <h1 className="text-center my-3 title">Login</h1>
        <form className="d-grid" onSubmit={onSubmitForm}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control my-2"
            value={email}
            onChange={onChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control my-2"
            value={password}
            onChange={onChange}
          />
          <button className="btn btn-outline-success">Submit</button>
        </form>
        <Link to="/register">Register</Link>
      </div>
    </Fragment>
  );
};

export default Login;
