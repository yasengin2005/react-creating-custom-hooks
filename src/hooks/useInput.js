import { useState } from "react";

export const useInput = (params) => {
  const [inputs, setInputs] = useState(params);

  const changeHandler = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  console.log(inputs);

  return [inputs, changeHandler];
};
