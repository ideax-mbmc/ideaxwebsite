import { useEffect, useState } from 'react';

// Hackathon start date, matching the JSON-LD Event.startDate in public/index.html
// and the "2nd October 2026" copy repeated across About/FAQ/Footer/EventPage.
export const HACKATHON_START_DATE = new Date('2026-10-02T09:00:00+05:45');

const getTimeLeft = (targetDate) => {
  const diff = targetDate.getTime() - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, isPast: false };
};

// Plain setInterval is enough here: the display only needs whole-number
// digits once a second, and this avoids running a second continuous
// requestAnimationFrame loop alongside the hero's particle canvas.
export default function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}
