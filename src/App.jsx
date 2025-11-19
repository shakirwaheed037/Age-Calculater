
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Results from "./components/Results";
import Milestones from "./components/Milestones";
import { isValidDate, calculateAgeParts, nextBirthdayInfo, weekdayOfBirth, lifeProgressPercent, generationByYear } from "./utils/dateUtils";

export default function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [ageParts, setAgeParts] = useState(null);
  const [nextBirthday, setNextBirthday] = useState(null);
  const [weekday, setWeekday] = useState("");
  const [lifeProgress, setLifeProgress] = useState(null);
  const [generation, setGeneration] = useState("");

  // Live timer, updates every second when birthDate exists
  useEffect(() => {
    if (!birthDate) return;
    const update = () => {
      setAgeParts(calculateAgeParts(birthDate));
      setNextBirthday(nextBirthdayInfo(birthDate));
      setWeekday(weekdayOfBirth(birthDate));
      setLifeProgress(lifeProgressPercent(birthDate));
      setGeneration(generationByYear(birthDate.getFullYear()));
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, [birthDate]);

  function handleCalculate() {
    if (!isValidDate(day, month, year)) {
      alert("Please enter a valid date.");
      return;
    }
    const d = new Date(`${year}-${String(month).padStart(2,"0")}-${String(day).padStart(2,"0")}`);
    setBirthDate(d);
  }

  function handleReset() {
    setDay(""); setMonth(""); setYear("");
    setBirthDate(null);
    setAgeParts(null);
    setNextBirthday(null);
    setWeekday("");
    setLifeProgress(null);
    setGeneration("");
  }

  return (
    <div className="app-wrapper">
      <div className="container">
        <Header />
        <InputForm
          day={day} month={month} year={year}
          setDay={setDay} setMonth={setMonth} setYear={setYear}
          onCalculate={handleCalculate} onReset={handleReset}
        />
        <Results
          ageParts={ageParts}
          nextBirthday={nextBirthday}
          weekday={weekday}
          lifeProgress={lifeProgress}
          generation={generation}
        />
        <Milestones birthDate={birthDate} />
      </div>
    </div>
  );
}
