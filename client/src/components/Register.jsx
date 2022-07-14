import { Fragment, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "../App.css";

const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });
  const { email, password, name } = inputs;

  let navigate = useNavigate();

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { email, password, name };

      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseResponse = await response.json();

      localStorage.setItem("token", parseResponse.token);
      navigate("/login", { replace: true });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className="container">
        <h1 className="text-center my-3 title">Register</h1>
        <form className="d-grid" onSubmit={onSubmitForm}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control my-2"
            value={email}
            onChange={(e) => onChange(e)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control my-2"
            value={password}
            onChange={(e) => onChange(e)}
          />
          <input
            type="text"
            name="name"
            placeholder="Display Name"
            className="form-control my-2"
            value={name}
            onChange={(e) => onChange(e)}
          />
          <button className="btn btn-outline-success btn-block">Submit</button>
        </form>
        <Link to="/login">Login</Link>
      </div>
    </Fragment>
  );
};

export default Register;
