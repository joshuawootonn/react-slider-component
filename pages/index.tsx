import { useState } from "react";
import { Circle, Square, Triangle } from "../components/shapes";
import { Slider } from "../components/slider";

export default function Home() {
  const [state, setState] = useState<number>(0);

  return (
    <div className="px-10">
      <Slider
        className="w-full max-w-3xl mx-auto mt-5"
        stops={[
          <Square className="fill-purple" />,
          <Circle className="fill-blue" />,
          <Triangle className="fill-orange" />,
          <Square className="fill-green" />,
          <Circle className="fill-yellow" />,
          <Square className="fill-pink" />,
        ]}
        value={state}
        onChange={(value: number) => setState(value)}
      />
    </div>
  );
}
