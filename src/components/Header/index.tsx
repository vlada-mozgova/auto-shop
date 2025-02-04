import React from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/logo.svg";
import classNames from "classnames";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={classNames("container", styles.headerContent)}>
        <a href="/" className={styles.logo}>
          <img src={logo} alt="Logo" />
        </a>
        <div className={styles.nav}>
          <a href="/">Purchase</a>
          <a href="/">My Orders</a>
          <a href="/">Sell</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
