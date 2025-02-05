import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Logo from "../Logo/index.tsx";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={classNames("container", styles.headerContent)}>
        <Logo />
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
