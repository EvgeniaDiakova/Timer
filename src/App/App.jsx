import { Clock } from "../components/Clock";
import { Button } from "../components/Button";
import { Counter } from "../components/Counter";
import { useTimer } from "../useTimer";
import "./App.css";

export function App() {
  const { time, status, start, stop, reset } = useTimer();

  return (
    <div className="mainSection">
      <div className="clockHolder">
        <div className="timer">
          <Clock time={time} />
          <Counter />
          <Button status={status} start={start} stop={stop} reset={reset} />
        </div>
      </div>
    </div>
  );
}
