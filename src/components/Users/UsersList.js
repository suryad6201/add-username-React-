import React from "react";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";

function UsersList(props) {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            <p> Name of the customer: {user.name}</p>
            <p>Age of the customer: {user.age}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
