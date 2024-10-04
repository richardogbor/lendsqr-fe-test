"use client";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoCaretDownOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img
          src="./images/Union.png"
          alt="union"
          width="20.63px"
          height="20.84px"
        />

        <img
          src="./images/lendsqr.png"
          alt="union"
          width="115.37px"
          height="30px"
        />
      </div>
      <div className={styles.navCenter}>
        <input
          className={styles.input}
          type="search"
          placeholder="Search for anything"
        />
        <span className={styles.searchIcon}>
          <IoSearchOutline />
        </span>
      </div>
      <div className={styles.navRight}>
        <Link href="" className={styles.docs}>
          Docs
        </Link>
        <div className={styles.noti}>
          <IoNotificationsOutline />
        </div>
        <div className={styles.proCont}>
          <img
            className={styles.proPic}
            src="./images/propic.png"
            alt="Profile Picture"
            width={48}
            height={48}
          />

          <span className={styles.proText}>Adedeji</span>
          <span>
            <IoCaretDownOutline />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
