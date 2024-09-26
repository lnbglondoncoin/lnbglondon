"use client";

import { useRef, useState, useEffect } from "react";

const CountdownTimer = ({ lang = "en" }) => {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, days, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(
        (days > 9 ? days : "0" + days) +
          ":" +
          (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds),
      );
    }
  };

  const clearTimer = (e) => {
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date("2024-10-16T00:00:00Z");

    return deadline;
  };

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  // Another way to call the clearTimer() to start
  // the countdown is via action event from the
  // button first we create function to be called
  // by the button
  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  return (
    <div className="flex w-full justify-center gap-5">
      <div className="flex flex-col items-center gap-y-1">
        <span className="text-2xl font-semibold text-primary">
          {timer.substring(0, 2)}
        </span>
        <span className="text-xs">
          {lang === "en"
            ? "days"
            : lang === "ru"
              ? "дни"
              : lang === "fr"
                ? "journées"
                : "días"}
        </span>
      </div>
      <div className="flex flex-col items-center gap-y-1">
        <span className="text-2xl font-semibold text-primary">
          {timer.substring(3, 5)}
        </span>
        <span className="text-xs">
          {lang === "en"
            ? "hours"
            : lang === "ru"
              ? "часы"
              : lang === "fr"
                ? "heures"
                : "horas"}
        </span>
      </div>
      <div className="flex flex-col items-center gap-y-1">
        <span className="text-2xl font-semibold text-primary">
          {timer.substring(6, 8)}
        </span>
        <span className="text-xs">
          {lang === "en"
            ? "mins"
            : lang === "ru"
              ? "мин"
              : lang === "fr"
                ? "mins"
                : "mins"}
        </span>
      </div>
      <div className="flex flex-col items-center gap-y-1">
        <span className="text-2xl font-semibold text-primary">
          {timer.substring(9, 11)}
        </span>
        <span className="text-xs">
          {lang === "en"
            ? "secs"
            : lang === "ru"
              ? "сек"
              : lang === "fr"
                ? "secs"
                : "secs"}
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
