import React from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Tabs from "./Tabs";

export default function TabsButtons() {
  const [selectedTopic, setSelctedTopic] = React.useState();
  let tabContent;
  function handleClick(selectedButton) {
    setSelctedTopic(selectedButton);
    console.log(selectedTopic);
  }

  tabContent = selectedTopic ? (
    <div>
      <h2>{EXAMPLES[selectedTopic].title}</h2>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  ) : (
    <p>Please select a topic</p>
  );

  return (
    <>
      <Tabs
        buttonsContainer="menu"
        className="flex"
        buttons={
          <>
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
            </TabButton>{" "}
          </>
        }
      >
        {tabContent}
      </Tabs>

      {/* <div>{tabContent}</div> */}
    </>
  );
}
