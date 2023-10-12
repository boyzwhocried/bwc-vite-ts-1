import { useEffect, useState } from "react";

interface RandomNumberGeneratorProps {
  interval: number; // Interval in milliseconds
  range: [number, number]; // Range for random numbers
}

function useRandomNumberGenerator({
  interval,
  range,
}: RandomNumberGeneratorProps): number {
  const [randomNumber, setRandomNumber] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newRandomNumber =
        Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
      setRandomNumber(newRandomNumber);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [interval, range]);

  return randomNumber;
}

export default useRandomNumberGenerator;
