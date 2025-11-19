
import React from "react";
import styles from "./InputForm.module.css";
// import { ReactComponent as EyeIcon } from "../assets/eye.svg"; // optional, ignore if no svg

export default function InputForm({ day, month, year, setDay, setMonth, setYear, onCalculate, onReset }) {
  return (
    <div className={styles.formWrap}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label>Day</label>
          <select value={day} onChange={e => setDay(e.target.value)}>
            <option value="">Day</option>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i+1} value={String(i+1).padStart(2,"0")}>{i+1}</option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label>Month</label>
          <select value={month} onChange={e => setMonth(e.target.value)}>
            <option value="">Month</option>
            {["January","February","March","April","May","June","July","August","September","October","November","December"].map((m,i)=>(
              <option key={m} value={i+1}>{m}</option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label>Year</label>
          <input
            value={year}
            onChange={e => setYear(e.target.value.replace(/\D/g,""))}
            placeholder="YYYY"
            maxLength={4}
          />
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.calc} onClick={onCalculate}>
          {/* optional icon area */}
          <span className={styles.eye}>👁️</span>
          <span>Calculate Age</span>
        </button>

        <button className={styles.reset} onClick={onReset}>
          ⟳ Reset
        </button>
      </div>
    </div>
  );
}
