"use client";

import Link from "next/link";
import styles from "./register.module.css";
import Image from "next/image";
import { useState } from "react";

const registerPage = () => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    age: 0,
    email: "",
    password: "",
    rePassword: "",
  });

  const [error, setError] = useState("");

  const validateUser = () => {
    if (userData.firstname.length == 0 || userData.firstname.length > 20) {
      return setError("Your FirstName must be between 1 - 20");
    } else if (userData.lastname.length == 0 || userData.lastname.length > 20) {
      return setError("You LastName must be between 1 - 20");
    } else if(userData.age == 0){
      return setError("You must enter an age between 14 - 100")
    }else if (parseInt(userData.age) < 14 || parseInt(userData.age) > 100) {
      return setError("You must be older than 14");
    } else if (!userData.email.includes("@")) {
      return setError("You must enter a VALID email");
    } else if (userData.password.length == 0 || userData.password.length > 30) {
      return setError("Your password must be between 0 - 30");
    } else if (userData.rePassword.length == 0 || userData.rePassword.length > 30) {
      return setError("Retype your password");
    } else if (userData.password !== userData.rePassword) {
      return setError("Passwords dont match");
    } else {
      setError("")
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    validateUser();
    const result = await fetch('https://dummyjson.com/users/add', {
      method: "POST",
      headers: {"content-type":"application/json",},
      body: JSON.stringify(userData)
    }).then(res => res.json()).then(res => console.log(res))
  };

  return (
    <form className={styles.container}>
      <h1>Register your Account</h1>
      <div className={styles.top}>
        <h3 className={styles.title}>Sign Up with Social Media</h3>
        <div className={styles.linkWrapper}>
          <Link
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className={styles.link}
          >
            <div className={styles.google}>
              <Image src="/google.png" fill alt="Photo" />
            </div>
            <span className={styles.span}>Sign in with Google</span>
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
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
          <p className={styles.inLine}>Or Create account with email</p>
          <hr className={styles.line} />
        </div>
        {error.length > 0 && <p className={styles.errorText}>{error}</p>}
      </div>
      <div className={styles.wrapper}>
        <div className={styles.inWrapper}>
          <div className={styles.label}>
            <label htmlFor="user">FirstName</label>
            <input
              type="text"
              id="user"
              placeholder="Madona"
              className={styles.text}
              required
              onChange={(event) => {
                return setUserData((prev) => {
                  return { ...prev, firstname: event.target.value };
                });
              }}
            />
          </div>
          <div className={styles.label}>
            <label htmlFor="email">LastName</label>
            <input
              type="email"
              id="email"
              placeholder="koidze"
              className={styles.text}
              required
              onChange={(event) => {
                return setUserData((prev) => {
                  return { ...prev, lastname: event.target.value };
                });
              }}
            />
          </div>
        </div>
        <div className={styles.inWrapper}>
          <div className={styles.label}>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              placeholder="37"
              className={styles.text}
              required
              onChange={(event) => {
                return setUserData((prev) => {
                  return { ...prev, age: event.target.value };
                });
              }}
            />
          </div>
          <div className={styles.label}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="lukamasmadloba<3@gmail.com"
              className={styles.text}
              required
              onChange={(event) => {
                return setUserData((prev) => {
                  return { ...prev, email: event.target.value };
                });
              }}
            />
          </div>
        </div>
        <div className={styles.inWrapper}>
          <div className={styles.label}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="*********"
              className={styles.text}
              required
              onChange={(event) => {
                return setUserData((prev) => {
                  return { ...prev, password: event.target.value };
                });
              }}
            />
          </div>
          <div className={styles.label}>
            <label htmlFor="rePassword">Retype Password</label>
            <input
              type="password"
              id="rePassword"
              placeholder="*********"
              className={styles.text}
              required
              onChange={(event) => {
                return setUserData((prev) => {
                  return { ...prev, rePassword: event.target.value };
                });
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <button className={styles.button} onClick={handleRegister}>
          Create Account
        </button>
      </div>
    </form>
  );
};

export default registerPage;
