"use client";

import Link from "next/link";
import styles from "./loginform.module.css";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const LoginForm = () => {
  const inputRef = useRef(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    fetch("https://fakeauthentication-api.onrender.com/api/staticUsers/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form className={styles.container}>
      <h1>Sign in to your Account</h1>
      <div className={styles.top}>
        <h3 className={styles.title}>Sign in with Social Media</h3>
        <div className={styles.linkWrapper}>
          <Link
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            className={styles.link}
          >
            <div className={styles.google}>
              <Image src="/google.png" fill alt="Photo" />
            </div>
            <span className={styles.span}>Sign in with Google</span>
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            className={styles.link}
          >
            <div className={styles.git}>
              <Image src="/git.png" fill alt="Photo" />
            </div>
            <span className={styles.span}>Sign in with GitHub</span>
          </Link>
        </div>
        <div className={styles.lineWrapper}>
          <hr className={styles.line} />
          <p className={styles.inLine}>Or Sign in with your Username</p>
          <hr className={styles.line} />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.label}>
          <label htmlFor="user">Username</label>
          <input
            ref={inputRef}
            type="text"
            id="user"
            placeholder="Username"
            className={styles.text}
            onChange={(event) => {
              return setUsername(event.target.value);
            }}
            required
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
            required
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
