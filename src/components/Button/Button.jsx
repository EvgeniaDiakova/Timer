import React from "react";
import styles from "./Button.module.css";
import imagePlay from "../../image/triangle.svg";
import imagePause from "../../image/pause.svg";

export function Button({ status, start, stop, reset }) {
  return (
    <div className={styles.buttonColor}>
      {status === 0 ? (
        <button
          className={`${styles.timerBtn} ${styles.timerBtnGreen} `}
          onClick={start}
        >
          <img src={imagePlay} alt="triangle" />
          Play
        </button>
      ) : (
        ""
      )}

      {status === 1 ? (
        <div className={styles.buttonStatusTwo}>
          <button
            className={`${styles.timerBtn} ${styles.timerBtnBlue}`}
            onClick={stop}
          >
            <img src={imagePause} alt="pause" />
            Stop
          </button>
          <button
            className={`${styles.timerBtn} ${styles.timerBtnYellow}`}
            onClick={reset}
          >
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
