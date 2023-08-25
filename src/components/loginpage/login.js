import React, { useState } from "react";
import styles from "./login.module.css";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [revealPassword, setRevealPassword] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
 
  const handleShowPassword = () => {
    setRevealPassword(!revealPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    axios.post("http://localhost:5000/login", {
      email: userName,
      password: password
    }).then(response => {
      setUser(response.data?.user)
    }).catch(e => {
      const response =  e.response;
      if(response && response.data) setError(response.data)
    })
  };

  const handleLogout = e => {
    setUser(null);
  }

  return (
    <div className={styles.container}>
      <h1>Login In</h1>

      { user 
      ? <div>
        <h1>Successfully Logged in {user.name} </h1>
        <button className={styles.button} type="button" onClick={handleLogout}>Logout</button>
      </div>
      :
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
          { error && error.message 
          ?
          <div className={styles.errorContainer}>
              <small>{ error.message }</small>
          </div>
          : null
          }
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
      }

    </div>
  );
};

export default LoginPage;
