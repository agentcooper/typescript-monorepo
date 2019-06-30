import React, { useEffect, useState } from "react";
import { transform } from "text-to-emoji";

import { fetchExamples } from "./network";

export function App() {
  const [examples, setExamples] = useState<string[]>([]);
  const [input, setInput] = useState("police poop");

  useEffect(() => {
    fetchExamples().then(examples => {
      setExamples(examples);
    });
  }, []);

  return (
    <>
      <h1>Text to emoji playground</h1>
      <ul>
        {examples.map(example => (
          <li className="line" key={example}>
            {example} → {transform(example)}
          </li>
        ))}
        <li>
          <input
            type="text"
            placeholder="Your text..."
            value={input}
            onChange={event => {
              setInput(event.target.value);
            }}
          />{" "}
          → {transform(input)}
        </li>
      </ul>
    </>
  );
}
