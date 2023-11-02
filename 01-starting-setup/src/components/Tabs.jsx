import React from "react";

const Tabs = ({ children, buttons, buttonsContainer, ...props }) => {
  const ButtonsContainer = buttonsContainer;
  return (
    <section>
      <ButtonsContainer {...props}>{buttons}</ButtonsContainer>
      {children}
    </section>
  );
};

export default Tabs;
