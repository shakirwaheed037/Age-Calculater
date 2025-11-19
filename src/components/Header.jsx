// src/components/Header.jsx
import React from "react";
import styles from "./Header.module.css";

 function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <h1 className={styles.title}>Advanced Age Calculator</h1>
        <p className={styles.subtitle}>Discover your exact age and upcoming life milestones</p>
      </div>
    </header>
  );
}
export default Header;

