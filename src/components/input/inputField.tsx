import { Input as AntdInput } from "antd";
import React from "react";
const { TextArea } = AntdInput;

interface IInputFieldProps {
  message: string;
  setValues: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputField = ({ message, setValues }: IInputFieldProps) => {
  return (
    <div>
      <TextArea value={message} bordered={false} onChange={setValues}  />
    </div>
  );
};

export default InputField;
