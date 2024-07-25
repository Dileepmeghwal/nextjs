import Accordion from "@/component/Accordion";
import AccordionItem from "@/component/AccordionItem";
import React from "react";

const about = () => {
  return (
    <div>
      <Accordion>
        <AccordionItem title={"section 1"}>
          <p>Content for section 1</p>
        </AccordionItem>
        <AccordionItem title={"section 2"}>
          <p>Content for section 2</p>
        </AccordionItem>
        <AccordionItem title={"section 3"}>
          <p>Content for section 3</p>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default about;
