"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { title: "Homepage", path: "/" },
  { title: "About", path: "/about" },
  { title: "Blog", path: "/Blog" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default Navbar;
