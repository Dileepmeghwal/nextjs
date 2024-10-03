import React, { useState } from "react";

export const data = [
  { title: "First", id: 0, checked: false },
  { title: "Second", id: 1, checked: false },
  { title: "Third", id: 2, checked: false },
  { title: "Fourth", id: 3, checked: false },
];

const TransferList = () => {
  const [leftItems, setLeftItems] = useState(data);
  const [rightItems, setRightItems] = useState([]);
  const [selectedLeft, setSelectedLeft] = useState([]);
  const [selectedRight, setSelectedRight] = useState([]);

  const handleSelectLeft = (item) => {
    console.log(item);

    if (selectedLeft.includes(item)) {
      console.log('ds',item);
      
      setSelectedLeft(selectedLeft.filter((i) => i !== item));
    } else {
      setSelectedLeft([...selectedLeft, item]);
    }
  };

  const handleSelectedRight = (item) => {
    if (selectedRight.includes(item)) {
      setSelectedRight(selectedRight.filter((i) => i !== item));
    } else {
      setSelectedRight([...selectedRight, item]);
    }
  };

  const moveToRight = () => {
    const newRightItems = [...rightItems, ...selectedLeft];
    const newLeftItems = leftItems.filter(
      (item) => !selectedLeft.includes(item)
    );
    setRightItems(newRightItems);
    setLeftItems(newLeftItems);
    setSelectedLeft([]);
  };

  const moveToLeft = () => {
    const newLeftItems = [...leftItems, ...selectedRight];
    const newRightItems = rightItems.filter(
      (item) => !selectedRight.includes(item)
    );

    setLeftItems(newLeftItems);
    setRightItems(newRightItems);
    setSelectedRight([]);
  };

  // const handlerLeftSelect = (item) => {
  //   console.log(item);
  // };
  return (
    <>
      <div className="container  w-1/2 mx-auto mt-5 ">
        <div className="flex gap-3">
          <div className="flex   justify-center">
            <div className=" border p-4">
              <h3 className="text-center font-semibold mb-4">
                Available Items from Left
              </h3>
              <div className="space-y-2">
                {leftItems?.map((item, index) => (
                  <div
                    onClick={() => handleSelectLeft(item)}
                    key={index}
                    className={`p-2 border cursor-pointer ${
                      selectedLeft.includes(item) ? "bg-blue-400" : ""
                    } `}
                  >
                    <p>{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="  border p-4">
            <h3 className="text-center font-semibold mb-4">
              Selected Items from RIGHT
            </h3>
            <div className="space-y-2">
              {rightItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectedRight(item)}
                  className={`p-2 border cursor-pointer ${
                    selectedRight.includes(item) ? "bg-blue-400" : ""
                  } `}
                >
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center align-middle gap-3 mt-5 mx-auto container">
          <button
            onClick={moveToRight}
            className="  p-2 border bg-green-500 text-white"
          >
            Move Right →
          </button>
          <button
            onClick={moveToLeft}
            className="  p-2 border bg-red-500 text-white"
          >
            ← Move Left
          </button>
        </div>
      </div>
    </>
  );
};

export default TransferList;
