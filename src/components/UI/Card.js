import React from "react";
import styles from "./Card.module.css";

//props.children takes all code inside CARD component in AddUser.js
function Card(props) {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
}

export default Card;
