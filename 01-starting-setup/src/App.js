import React from "react";
import { EXAMPLES } from "./data.js";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";
import CoreConcept from "./components/CoreConcept.jsx";

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from "react";
// React.useState(...)

// don't change the Component name "App"
export default function App() {
  let [selectedTopic, setSelctedTopic] = React.useState();
  let tabContent;
  function handleClick(selectedButton) {
    setSelctedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <div>
      <div className="coreConcepts">
        {CORE_CONCEPTS.map((coreConcept) => (
          <CoreConcept text={coreConcept} />
        ))}
      </div>

      <div className="flex">
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleClick("components")}
        >
          components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleClick("jsx")}
        >
          jsx
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleClick("props")}
        >
          props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleClick("state")}
        >
          state
        </TabButton>
      </div>
      <div>
        {!selectedTopic && <p>Please select a topic</p>}
        {selectedTopic && (
          <div>
            <h2>{EXAMPLES[selectedTopic].title}</h2>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
