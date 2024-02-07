import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    // Super Bowl 2024 kickoff at 6:30 PM Eastern Time, February 11, 2024
    // Adjust the '2024-02-11T18:30:00-05:00' format to your specific time zone if necessary
    const difference = +new Date('2024-02-11T18:30:00-05:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Update the countdown every second
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => (
    timeLeft[interval] ? <span key={interval}>{timeLeft[interval]} {interval}{" "}</span> : null
  ));

  return (
    <div>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};

export default CountdownTimer;
