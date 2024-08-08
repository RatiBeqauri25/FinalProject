"use client";

import Link from "next/link";
import styles from "./loginform.module.css";
import Image from "next/image";
import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    fetch("https://fakeauthentication-api.onrender.com/api/staticUsers/login", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({username, password}),
    }).then(res => res.json()).then(res => console.log(res))
  };

  return (
    <form className={styles.container}>
      <h1>Sign in to your Account</h1>
      <div className={styles.top}>
        <h3 className={styles.title}>Sign in with Social Media</h3>
        <div className={styles.linkWrapper}>
          <Link href="" className={styles.link}>
            <div className={styles.google}>
              <Image src="/google.png" fill alt="Photo"/>
            </div>
            <span className={styles.span}>Sign in with Google</span>
          </Link>
          <Link href="" className={styles.link}>
            <div className={styles.git}>
              <Image src="/git.png" fill alt="Photo" />
            </div>
            <span className={styles.span}>Sign in with GitHub</span>
          </Link>
        </div>
        <div className={styles.lineWrapper}>
          <p className={styles.inLine}>Or Sign in with your Username</p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.label}>
          <label htmlFor="user">Username</label>
          <input
            type="text"
            id="user"
            placeholder="Username"
            className={styles.text}
            onChange={(event) => {
              return setUsername(event.target.value);
            }}
          />
        </div>
        <div className={styles.label}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            className={styles.text}
            onChange={(event) => {
              return setPassword(event.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <button className={styles.button} onClick={handleLogin}>
          Sign In Now
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
