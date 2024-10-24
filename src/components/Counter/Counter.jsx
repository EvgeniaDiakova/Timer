import React, { useEffect, useRef } from "react";
import styles from "./Counter.module.css";

export function Counter() {
  const RenderCount = useRef(0);

  useEffect(() => {
    RenderCount.current += 1;
  });

  return (
    <div>
      <h1 className={styles.counterHeading}>
        Number of component renders: {RenderCount.current}
      </h1>
      <hr className={styles.counterDivider} />
    </div>
  );
}
