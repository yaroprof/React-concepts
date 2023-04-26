import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [countdownDate, setCountdownDate] = useState(new Date("2023-12-31T23:59:59"));
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate.getTime() - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdownDate]);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  };

  const timerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  const labelStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1rem",
    fontWeight: "bold",
    textTransform: "uppercase",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ marginBottom: "2rem" }}>Countdown Timer</h1>
      <div style={timerStyle}>
        <span>{days}</span>:
        <span>{hours}</span>:
        <span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <div style={labelStyle}>
        <span>Days</span>
        <span style={{ margin: "0 1rem" }}>Hours</span>
        <span>Minutes</span>
        <span style={{ margin: "0 1rem" }}>Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
