import React from "react";
import styles from "./FormElements.module.css";

export const Element = Element => ({ input, meta: { touched, error }, ...props }) => {
  const isError = touched && error;
  return (
    <div className={styles.formControl + " " + (isError ? styles.error : " ")}>
      <div>
        {" "}
        <Element {...input} {...props} />
      </div>
      {isError && <span>{error}</span>}
    </div>
  );
};

/* export const Input = ({ input, meta: { touched, error }, ...props }) => {
  const isError = touched && error;
  return (
    <div className={styles.formControl + " " + (isError ? styles.error : " ")}>
      <div>
        {" "}
        <input {...input} {...props} />
      </div>
      {isError && <span>{error}</span>}
    </div>
  );
}; */


