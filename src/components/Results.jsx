// src/components/Results.jsx
import React from "react";
import styles from "./Results.module.css";

function StatCard({ value, label }) {
  return (
    <div className={styles.stat}>
      <div className={styles.value}>{value ?? "-"}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}

function InfoCard({ title, text }) {
  return (
    <div className={styles.infoCard}>
      <div className={styles.infoTitle}>{title}</div>
      <div className={styles.infoText}>{text ?? "-"}</div>
    </div>
  );
}

export default function Results({ ageParts, nextBirthday, weekday, lifeProgress, generation }) {
  return (
    <section className={styles.results}>
      <div className={styles.resultsHeader}>
        <h3> Your Age Results </h3>
        <div className={styles.zodiac}>Aries</div>
      </div>

      <div className={styles.statsRow}>
        <StatCard value={ageParts ? ageParts.years : "-"} label="Years" />
        <StatCard value={ageParts ? ageParts.months : "-"} label="Months" />
        <StatCard value={ageParts ? ageParts.days : "-"} label="Days" />
        <StatCard value={ageParts ? ageParts.hours : "-"} label="Hours" />
      </div>

      <div className={styles.infoRow}>
        <InfoCard title="Next Birthday" text={nextBirthday ? `${nextBirthday.nextDate.toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" })}` : "-"} />
        <InfoCard title="Birth Day" text={weekday || "-"} />
        <InfoCard title="Life Progress" text={lifeProgress ? `${lifeProgress}% of average lifespan` : "-"} />
        <InfoCard title="Generation" text={generation || "-"} />
      </div>
    </section>
  );
}
