import React from "react";

const AccordionItem = ({ title, onToggle, children, isActive }) => {
  return (
    <div>
      <div onClick={onToggle}>
        <h3>{title}</h3>
      </div>
      {isActive && <div>{children}</div>}
    </div>
  );
};

export default AccordionItem;
