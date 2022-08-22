import { useCallback, useState } from "react";

export function useCount(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  const decrement = useCallback(() => {
    setCount((currentCount) =>
      currentCount > 0 ? currentCount - 1 : currentCount
    );
  }, []);

  const increment = useCallback(() => {
    setCount((currentCount) => currentCount + 1);
  }, []);

  return { count, decrement, increment };
}
