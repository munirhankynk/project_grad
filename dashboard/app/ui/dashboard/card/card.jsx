"use client";
import { useState } from "react";
import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = ({ header }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{ width: 450, marginRight: 15 }}
        className={styles.container}
        onClick={toggleExpand}
      >
        <div className={`card ${expanded ? "expanded" : ""}`}>
          <MdSupervisedUserCircle size={24} />
          <div className={styles.texts}>
            <span className={styles.title}>{header}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
