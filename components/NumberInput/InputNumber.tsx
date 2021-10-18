import React from "react";
import NumberInput from "../NumberInput/NumberInput";

const InputNumber = ({ value, onChange }: any) => {
  return (
    <div dir="rtl">
      <NumberInput
        variant="outlined"
        color="primary"
        placeholder="مقدار"
        size="medium"
        disabled
        value={value}
        rounded
        onChange={onChange}
      ></NumberInput>
    </div>
  );
};

export default InputNumber;
