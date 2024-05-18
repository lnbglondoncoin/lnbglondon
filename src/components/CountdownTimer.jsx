"use client";

import { useRef, useState, useEffect } from "react";

const CountdownTimer = () => {
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
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("52:21:12:08");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    // set timer to 52 days 21 hours 12 minutes 08 seconds
    deadline.setDate(deadline.getDate() + 52);
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
    <div className="flex w-full max-w-[458px] justify-between">
      <div className="flex flex-col items-center gap-y-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary sm:h-20 sm:w-20 sm:border-4 sm:text-2xl sm:font-bold">
          {timer.substring(1, 2)}
          {timer.substring(0, 1)}
        </div>
        <span className="">Days</span>
      </div>
      <div className="flex flex-col items-center gap-y-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary sm:h-20 sm:w-20 sm:border-4 sm:text-2xl sm:font-bold">
          {timer.substring(3, 4)}
          {timer.substring(4, 5)}
        </div>
        <span className="">Hours</span>
      </div>
      <div className="flex flex-col items-center gap-y-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary sm:h-20 sm:w-20 sm:border-4 sm:text-2xl sm:font-bold">
          {timer.substring(6, 7)}
          {timer.substring(7, 8)}
        </div>
        <span className="">Mins</span>
      </div>
      <div className="flex flex-col items-center gap-y-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary sm:h-20 sm:w-20 sm:border-4 sm:text-2xl sm:font-bold">
          {timer.substring(9, 10)}
          {timer.substring(10)}
        </div>
        <span className="">Secs</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
