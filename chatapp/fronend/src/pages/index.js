import axios from "axios";
import React, { useEffect } from "react";
import Login from "./login";

const Index = () => {
  useEffect(() => {
    getChatList();
  }, []);
  const getChatList = () => {
    axios
      .get(`http://localhost:5000/api/chat`)
      .then((res) => {
        console.log("res", res.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Login />
    </div>
  );
};

export default Index;
