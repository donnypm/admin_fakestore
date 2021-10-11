import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Home.module.scss";

const LoginForm = ({ Login }) => {
  const [details, setDetails] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <section className={styles.login}>
      <h1>Login </h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="input"
          name="username"
          placeholder="Username"
          value={details.username}
          onChange={(e) => setDetails({ ...details, username: e.target.value })}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={details.password}
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default LoginForm;
