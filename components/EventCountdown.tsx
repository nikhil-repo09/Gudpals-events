'use client';

import { useEffect, useState } from 'react';

interface EventCountdownProps {
  eventDate: string;
  eventTime: string;
}

export default function EventCountdown({
  eventDate,
  eventTime,
}: EventCountdownProps) {
  const getTargetDate = () => {
    const time = eventTime.split(' - ')[0].trim();

    return new Date(`${eventDate}T${time}`);
  };

  const calculateTimeLeft = () => {
    const difference = getTargetDate().getTime() - Date.now();

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate, eventTime]);

  if (!timeLeft) {
    return (
      <div className="text-sm font-semibold">
        🔴 Event is Live
      </div>
    );
  }

  return (
    <div>
      <p className="text-xs uppercase tracking-wider opacity-70">
        Starts in
      </p>

      <div className="mt-1 flex gap-3">
        <div>
          <strong>{timeLeft.days}</strong>
          <span className="ml-1 text-xs">Days</span>
        </div>

        <div>
          <strong>{timeLeft.hours}</strong>
          <span className="ml-1 text-xs">Hours</span>
        </div>

        <div>
          <strong>{timeLeft.minutes}</strong>
          <span className="ml-1 text-xs">Min</span>
        </div>

        <div>
          <strong>{timeLeft.seconds}</strong>
          <span className="ml-1 text-xs">Sec</span>
        </div>
      </div>
    </div>
  );
}