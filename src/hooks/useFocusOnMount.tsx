import { useRef, useEffect } from "react";

export default function useFocusOnMount<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref.current]);

  return ref;
}
