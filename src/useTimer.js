import { useState, useEffect, useRef, useCallback } from "react";

export function useTimer() {
  const [time, setTime] = useState({ ms: 0, s: 23, m: 19, h: 0 });
  const [status, setStatus] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    if (status == 1) {
      intervalRef.current = setInterval(run, 10);
    }

    return () => clearInterval(intervalRef.current);
  }, [status]);

  const start = useCallback(() => {
    if (status === 0) {
      setStatus(1);
      intervalRef.current = setInterval(run, 10);
    }
  }, [status, intervalRef]);

  const stop = () => {
    clearInterval(intervalRef.current);
    setStatus(1);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });

    if (status === 1) {
      intervalRef.current = setInterval(run, 10);
    }
  };

  let updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  return { time, status, start, stop, reset };
}
