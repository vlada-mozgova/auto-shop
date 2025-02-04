import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={classNames("container", styles.footerContent)}>
        © AUTO1 Group 2018
      </div>
    </footer>
  );
};

export default Footer;
