import React, { useEffect } from "react";
import axios from "axios";

const Text = () => {
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log({ res });
    });
  }, []);
  return <div>text</div>;
};

export default Text;
