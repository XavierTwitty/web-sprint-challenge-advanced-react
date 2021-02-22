// write your custom hook here to control your checkout form

import { useState } from "react";

export const useForm = (key, initialValues) => {
  const [value, setValue] = useState(key, initialValues);

  const handleChange = (value) => {
    setValue(value);
  };
  return [value, handleChange];
};
