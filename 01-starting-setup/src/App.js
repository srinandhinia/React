import React from "react";
import { EXAMPLES } from "./data.js";
import TabButton from "./components/TabButton.jsx";

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
      <TabButton onSelect={() => handleClick("components")}>
        components
      </TabButton>
      <TabButton onSelect={() => handleClick("jsx")}>jsx</TabButton>
      <TabButton onSelect={() => handleClick("props")}>props</TabButton>

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
  );
}
