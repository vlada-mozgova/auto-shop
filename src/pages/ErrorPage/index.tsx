import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import Logo from "../../components/Logo/index.tsx";

const ErrorPage: React.FC = () => {
  return (
    <section className={styles.errorPage}>
      <div className={classNames("container", styles.errorPageWrapper)}>
        <Logo />
        <h1>404 - Not Found</h1>
        <p>
          Sorry, the page you are looking for does not exist.
          <br />
          <br />
          You can always go back to the <a href="/">homepage</a>.
        </p>
      </div>
    </section>
  );
};

export default ErrorPage;
