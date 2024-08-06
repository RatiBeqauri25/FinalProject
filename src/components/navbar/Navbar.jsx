"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { title: "Homepage", path: "/" },
  { title: "About", path: "/about" },
  { title: "Blog", path: "/Blog" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const pathName = usePathname();

  const [active, setActive] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.logo1}>
      <Image src="/logo.png" fill className={styles.logoImg1} />
      </div>
      <div className={styles.firstWrapper}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/logo.png" fill className={styles.logoImg} />
          </Link>
        </div>
        <div className={styles.linkDiv}>
          {links.map((link, index, array) => {
            return (
              <Link
                key={link.title}
                href={link.path}
                className={`${styles.Links} ${link.path === pathName && styles.linkActive}`}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      </div>
      <div className={styles.buttons}>
        <Link href="/login"><button className={styles.butt}>Login</button></Link>
        <Link href="/register"><button className={styles.butto}>Register</button></Link>
      </div>
      <div className={styles.menu}>
      <Image src="/menu.webp" fill className={styles.menuImg} onClick={() => 
      setActive((o) => {
        return !o
      })
      }/>
      </div>
      {active && (<div className={styles.menuBar}>
        {links.map((link) => {
          return <Link href={link.path} className={styles.link}>{link.title}</Link>
        })} 
        <Link href="/login" className={styles.link}>Login</Link>
      </div>)}
    </div>
  );
};

export default Navbar;
