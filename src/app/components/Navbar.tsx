"use client";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <>
      <div className={styles.bar}>
        <div className={styles.barinter}>
        <Link className={styles.logo} href="/">
            <Image
              className={styles.logo}
              src="./dbzlogo.png"
              width={200}
              height={100}
              alt="logo"
            />
          </Link>
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
          <button className={styles.open_nav} onClick={toggleNavbar}>
            {isClick ? (
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Menu / Close_LG">
                    {" "}
                    <path
                      id="Vector"
                      d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            ) : (
              <svg
                width="40px"
                height="40px"
                viewBox="-2.4 -2.4 28.80 28.80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#CCCCCC"
                  stroke-width="0.336"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M4 18L20 18"
                    stroke="#000000"
                    stroke-width="2.4"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M4 12L20 12"
                    stroke="#000000"
                    stroke-width="2.4"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M4 6L20 6"
                    stroke="#000000"
                    stroke-width="2.4"
                    stroke-linecap="round"
                  ></path>{" "}
                </g>
              </svg>
            )}
          </button>
        </div>
        {isClick && (
          <div className={styles.hidden_nav}>
          <ul className={styles.barinter2}>
            <li>
              <Link className={styles.link} onClick={toggleNavbar} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                onClick={toggleNavbar}
                href="/Sobre"
              >
                Sobre
              </Link>
            </li>
          </ul>
        </div>
        )}
      </div>
    </>
  );
}
