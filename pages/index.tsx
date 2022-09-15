import { useState } from "react";
import { Circle, Square, Triangle } from "../components/shapes";
import { Slider } from "../components/slider";

export default function Home() {
  const [state, setState] = useState<number>(4);

  return (
    <div className="px-10 w-full max-w-3xl mx-auto space-y-10 p-10">
      <h1 className="text-5xl">React Slider Component</h1>
      <p className="text-xl">
        This component is part of my{" "}
        <a
          href="https://www.joshuawootonn.com/react-slider-component"
          className="font-bold underline text-purple"
        >
          React slider component breakdown
        </a>{" "}
        blog post on{" "}
        <a
          href="https://www.joshuawootonn.com/"
          className="font-bold underline text-purple"
        >
          joshuawootonn.com
        </a>{" "}
        If you are looking for the code checkout{" "}
        <a
          href="https://github.com/joshuawootonn/react-slider-component"
          className="font-bold underline text-purple"
        >
          the github repo
        </a>
      </p>
      <Slider
        className=""
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
