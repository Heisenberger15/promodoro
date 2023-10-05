import { DateUtils } from "@/utils/date.utils";
import { useEffect, useMemo, useState } from "react";

export type CountdownType = ReturnType<typeof getReturnDateValues>;

const useCountdown = (targetDate: number | string | Date = 0): CountdownType => {
  const countdownDate = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [timeLeft, setTimeLeft] = useState(countdownDate - new Date().getTime());
  useEffect(() => {
    setTimeLeft(countdownDate - new Date().getTime());
  }, [countdownDate]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    interval = setInterval(() => {
      if (timeLeft < 0) return clearInterval(interval);
      setTimeLeft(countdownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownDate, timeLeft]);

  return getReturnDateValues(timeLeft);
};

export { useCountdown };

const getReturnDateValues = (time: number) => {
  const timeleft = Math.max(time, 0);
  const days = DateUtils.daysLeft(timeleft);
  const hours = DateUtils.hoursLeft(timeleft);
  const minutes = DateUtils.minutesLeft(timeleft);
  const seconds = DateUtils.secondsLeft(timeleft);

  const isFinished = time < 0 ? true : false;

  return { days, hours, minutes, seconds, isFinished, timeleft };
};
