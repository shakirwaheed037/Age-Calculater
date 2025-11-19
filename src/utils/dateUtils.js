
export function isValidDate(day, month, year) {
  const d = new Date(
    `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`
  );
  return (
    d &&
    d.getDate() === Number(day) &&
    d.getMonth() + 1 === Number(month) &&
    d.getFullYear() === Number(year)
  );
}

export function calculateAgeParts(birthDate) {
  const now = new Date();
  const diffMs = now - birthDate;

  const totalSeconds = Math.floor(diffMs / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);



  // Years and months calculation using a calendar math
  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();



  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
    months -= 1;
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }

  return {
    years,
    months,
    days,
    hours: totalHours,
    minutes: totalMinutes,
    seconds: totalSeconds,
  };
}

export function nextBirthdayInfo(birthDate) {
  const now = new Date();
  let next = new Date(
    now.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate()
  );

  if (next <= now) {
    next = new Date(
      now.getFullYear() + 1,
      birthDate.getMonth(),
      birthDate.getDate()
    );
  }

  const diffMs = next - now;
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diffMs / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(diffMs / (1000 * 60)) % 60;
  return {
    nextDate: next,
    days,
    hours,
    minutes,
    weekday: next.toLocaleString(undefined, { weekday: "long" }),
  };
}

export function weekdayOfBirth(birthDate) {
  return birthDate.toLocaleString(undefined, { weekday: "long" });
}

export function lifeProgressPercent(birthDate, averageLifespanYears = 72) {
  const now = new Date();
  const end = new Date(
    birthDate.getFullYear() + averageLifespanYears,
    birthDate.getMonth(),
    birthDate.getDate()
  );
  const totalMs = end - birthDate;
  const passedMs = now - birthDate;
  const percent = Math.max(0, Math.min(100, (passedMs / totalMs) * 100));
  return percent.toFixed(1);
}

export function generationByYear(year) {
  if (year >= 2010) 
    return "Gen Alpha (2010–present) The youngest digital-native generation.";

  if (year >= 1997) 
    return "Gen Z (1997–2012) Grew up with the internet, phones, and social media.";

  if (year >= 1981) 
    return "Millennial (1981–1996)  The early tech generation, saw the rise of the internet.";

  if (year >= 1965) 
    return "Gen X (1965–1980) Independent, witnessed pre-internet to internet shift.";

  if (year >= 1946) 
    return "Baby Boomer (1946–1964) Post-World War II generation.";

  return "Traditionalist (born before 1946) The oldest generation.";
}
