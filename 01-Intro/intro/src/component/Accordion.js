import React, { Children, cloneElement, useState } from "react";

const Accordion = ({ children }) => {
  const [activeindex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeindex ? null : index);
    console.log("asas", activeindex);
  };
  

  return (
    <div>
      {Children.map(children, (child, index) => {
        return cloneElement(child, {
          isActive: index === activeindex,
          onToggle: () => handleToggle(index),
        });
      })}
    </div>
  );
};

export default Accordion;
