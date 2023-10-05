export const zeroPad = (num: number, places: number = 2) =>
  String(num).padStart(places, "0");

export const DateUtils = {
  daysLeft: (timeleft: number) => Math.floor(timeleft / (1000 * 60 * 60 * 24)),

  hoursLeft: (timeleft: number) =>
    zeroPad(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),

  minutesLeft: (timeleft: number) =>
    zeroPad(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60))),

  secondsLeft: (timeleft: number) => zeroPad(Math.floor((timeleft % (1000 * 60)) / 1000)),

  isPast: (time: number): boolean => {
    const countDownDate = new Date(time).getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;
    return distance <= 0;
  },
};
