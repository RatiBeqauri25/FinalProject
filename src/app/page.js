import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.Intro}>
      <h1>Rati beqauri's Final Project for Next.js Cousre By CodeIT</h1>
      <p className={styles.desc}>Ive worked very hard on this project and i hope you'll like it</p>
      </div>
      <div className={styles.Image}>
        <Image 
            src="/grumbot.png"
            alt="CodeIT"
            fill
            className={styles.CodeIT}/>
      </div>
    </div>
  ); 
}
