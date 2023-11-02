import TabsButtons from "./components/TabsButtons.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Buttons from "./components/Buttons.jsx";

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from "react";
// React.useState(...)

// don't change the Component name "App"
export default function App() {
  return (
    <>
      <CoreConcepts />
      <TabsButtons />
      <Buttons mode="filled">Filled (Default)</Buttons>;
      <Buttons mode="outline">Outline</Buttons>
    </>
  );
}
