"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./contact.module.css";

const ContactPage = () => {
  const inputRef = useRef(null);

  const [active, setActive] = useState(false);

  useEffect( () => {
    if(inputRef.current){
      inputRef.current.focus()}
  }, [])

  return (
    <form action="" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.first}>
            <label htmlFor="name">Your name</label>
            <input
            ref={inputRef}
              type="text"
              id="name"
              placeholder="Full Name"
              className={styles.name}
              required
            />
          </div>
          <div className={styles.second}>
            <label htmlFor="email">Email Adress</label>
            <input
              type="email"
              id="email"
              placeholder="Email Adress"
              className={styles.email}
              required
            />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.third}>
            <label htmlFor="tel">
              Phone <span>(optional)</span>
            </label>
            <input
              type="tel"
              id="tel"
              placeholder="Phone Number"
              className={styles.phone}
            />
          </div>
          <div className={styles.fourth}>
            <label htmlFor="subj">Subject</label>
            <input
              type="text"
              id="subj"
              placeholder="Type Subject"
              className={styles.subject}
              required
            />
          </div>
        </div>
        <div className={styles.fifth}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Type Message"
            className={styles.message}
            required
          ></textarea>
        </div>
        <button className={styles.button}>Send Message</button>
      </div>
    </form>
  );
};

export default ContactPage;
