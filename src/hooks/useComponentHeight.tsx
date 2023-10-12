import { useEffect, useRef, useState } from "react";

function useComponentHeight() {
  const componentRef = useRef<HTMLElement | null>(
    null
  ) as React.MutableRefObject<HTMLInputElement>;
  const [componentHeight, setComponentHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (componentRef.current) {
        const height = componentRef.current.clientHeight;
        setComponentHeight(height);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return { ref: componentRef, height: componentHeight };
}

export default useComponentHeight;
