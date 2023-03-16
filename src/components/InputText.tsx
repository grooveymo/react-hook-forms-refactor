import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

export interface InputTextProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  field?: ControllerRenderProps<FieldValues, string>;
}

export const InputText = ({ name, ...props }: InputTextProps) => {
  const { field, ...rest } = props;
  // console.log("InputText: rest", rest);
  // console.log("InputText: field", field);
  return (
    <input
      name={name}
      type="text"
      className="m-4 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      {...field}
      {...rest}
    />
  );
};
