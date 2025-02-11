import { useEffect, useRef, useState } from "react";

type Props<T> = {
  value: T;
  threshold: number;
};

export function useDebounce<T>({ value, threshold }: Props<T>) {
  const [state, setState] = useState(value);
  const timerRef = useRef<NodeJS.Timeout>(null);
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setState(value), threshold);
    } else {
      setState(value);
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [value, threshold]);

  return state;
}
