import React from "react";

const Buttons = ({ children, mode }) => {
  buttonClass = `{mode}-button`;
  return <button className="mode">{children}</button>;
};

export default Buttons;
