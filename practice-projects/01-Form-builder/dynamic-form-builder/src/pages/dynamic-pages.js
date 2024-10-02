import { useState } from "react";

const DynamicForm = () => {
  const [fileds, setFileds] = useState([{ value: "" }]);

  const handleFiledValue = (index, event) => {
    // const newFiled = [...fileds];
    // newFiled[index].value == event.target.value;
    // setFileds(newFiled);

    setFileds((prevState) =>
      prevState.map((filed, i) =>
        i === index ? { ...filed, value: event.target.value } : filed
      )
    );
  };

  const handleAddfiled = () => {
    setFileds([...fileds, { value: "" }]);
  };
  const handleDlelete = (index) => {
    const newFileds = fileds.filter((_, id) => id !== index);
    setFileds(newFileds);
    // setFileds((fileds) => fileds.filter((_,id) => id !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = fileds.map((fileds) => fileds.value);
    console.log(data);
  };

  const score = [100, 200, 300, 50, 20, 40];
  const newScore = score.map(function (score, index, array) {
    return score + " " + index + " " + array;
  });

  console.log(newScore);

  return (
    <>
      <div className="container mx-auto">
        <div className=" bg-slate-200 p-3 h-screen w-full">
          <h1 className="text-center text-[30px] text-black">
            Dynamic Form Builder
          </h1>

          <form
            onSubmit={handleSubmit}
            className="md:grid md:grid-flow-col-3  gap-4 flex-wrap"
          >
            {fileds.map((filed, index, arr) => (
              <div key={index}>
                <input
                  type="text"
                  name=""
                  className=" ring-1 ring-slate-400 rounded h-8 px-2 text-black"
                  placeholder="Enter text "
                  value={filed.value}
                  onChange={(event) => handleFiledValue(index, event)}
                  id=""
                />
                {fileds.length > 1 && (
                  <button
                    onClick={() => handleDlelete(index)}
                    className="outline-1 right-1 ring-slate-400 outline-lime-700 text-white p-3 rounded"
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}

            <button
              onClick={handleAddfiled}
              className="bg-slate-600 text-white p-3 rounded"
            >
              Add Filed
            </button>
          </form>
        <button type="submit" onClick={handleSubmit} className="bg-red-500 ring-1 border-1 border-black text-black p-2 mt-3">Submit</button>
        </div>
      </div>
    </>
  );
};

export default DynamicForm;
