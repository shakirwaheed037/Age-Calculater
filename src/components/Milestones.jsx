// src/components/Milestones.jsx
import React from "react";
import styles from "./Milestones.module.css";

function Milestone({ title, date, desc }) {
  return (
    <div className={styles.card}>
      <div className={styles.mTitle}>{title}</div>
      <div className={styles.mDate}>{date ?? "-"}</div>
      {desc && <div className={styles.mDesc}>{desc}</div>}
    </div>
  );
}

export default function Milestones({ birthDate }) {
  if (!birthDate) return null;

  const y = birthDate.getFullYear();
  const m = birthDate.getMonth();
  const d = birthDate.getDate();

  const firstBirthday = new Date(y + 1, m, d);
  const teenager = new Date(y + 13, m, d);
  const sweet18 = new Date(y + 18, m, d);
  const startSchool = new Date(y + 5, m, d);

  function fmt(dt) {
    return dt.toLocaleDateString();
  }

  return (
    <section style={{ marginTop: 18 }}>
      <h4 style={{ color: "#222", marginBottom: 12 , marginLeft: 20 }}>Life Milestones</h4>
      <div className={styles.grid}>
        <Milestone title="Birth" date={fmt(birthDate)} desc="You were born" />
        <Milestone
          title="1st Birthday"
          date={fmt(firstBirthday)}
          desc="First trip around the sun"
        />
        <Milestone
          title="Start School"
          date={fmt(startSchool)}
          desc="Kindergarten begins"
        />
        <Milestone
          title="Teenager"
          date={fmt(teenager)}
          desc="Welcome to teen years"
        />
        <Milestone
          title="Sweet 16"
          date={fmt(new Date(y + 16, m, d))}
          desc="Driving age in many countries"
        />
      </div>
    </section>
  );
}
