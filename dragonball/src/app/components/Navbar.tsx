"use client";
import Link from "next/link";
import Image from "next/image";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div className={styles.bar}>
        <div className={styles.barinter}>
          <Link href="/">
          <Image
            className={styles.logo}
            src="/dbzlogo.png"
            width={200}
            height={100}
            alt="logo"
          />
          </Link>
        </div>
        <div className={styles.navbar}>
            <div className={styles.navbar_inter}>
              <Link className={styles.link} href="/">
                Home
              </Link>
              <Link className={styles.link} href="/Sobre">
                Sobre
              </Link>
            </div>
          </div>
      </div>
    </>
  );
}
