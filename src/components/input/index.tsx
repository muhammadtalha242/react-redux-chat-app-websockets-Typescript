import React, { useState } from "react";
import { MdSend } from "react-icons/md";

import { InputMainContainer } from "./container";
import InputField from "./inputField";

const Input = () => {
  const [message, setMessage] = useState("");
  const setValues = (message: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(message.target.value);
  };
  return (
    <InputMainContainer>
      <InputField message={message} setValues={setValues} />
    </InputMainContainer>
  );
};

export default Input;
