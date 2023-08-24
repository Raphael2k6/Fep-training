import React, { useState } from "react";
import styles from "./login.module.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [revealPassword, setRevealPassword] = useState(false);

  const handleShowPassword = () => {
    setRevealPassword(!revealPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ password, userName });
  };

  return (
    <div className={styles.container}>
      <h1>Login In</h1>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={userName}
              className={styles.input}
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className={styles.passwordContainer}>
            <label>Password</label>
            <input
              type={revealPassword === true ? "text" : "password"}
              value={password}
              className={styles.input}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.iconContainer} onClick={handleShowPassword}>
              {revealPassword === true ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </div>
          </div>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
