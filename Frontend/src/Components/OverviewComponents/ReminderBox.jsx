import React from "react";
import styles from "../../Styles/reminder.module.css";
import corpcare from "../../Assets/corpcare.png";
import { useToast } from "@chakra-ui/react";
export const ReminderBox = () => {
  const toast = useToast();
  const handleClick = () => {
    toast({
      title: `Reminder Added`,
      status: "success",
      isClosable: true,
    });
  };
  return (
    <div className={styles.container}>
      <p>Reminder</p>

      <div className={styles.reminder}>
        <p style={{ left: "38px" }}>Agency Design Kit</p>
        <img src={corpcare} alt="logo" />
        <p
          style={{ top: "147px", lineHeight: "141.5%" }}
          className={styles.detail}
        >
          Will be published Nov 25, 2022
        </p>
        <button onClick={handleClick}>Set as Reminder</button>
      </div>
    </div>
  );
};
