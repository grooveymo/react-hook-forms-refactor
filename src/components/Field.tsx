import React from "react";
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  useFormContext
} from "react-hook-form";
import { ValidationError } from "../components/ValidationError";

export interface FieldProps {
  name: string;
  label: string;
  renderField: (
    field: ControllerRenderProps<FieldValues, string>
  ) => React.ReactElement;
}

export const Field = ({ name, label, renderField }: FieldProps) => {
  const { control, formState } = useFormContext(); // retrieve all hook methods

  const { errors } = formState;

  const validationError = errors[name];
  console.log("errors", name, validationError);
  return (
    <>
      <label className="ml-4 mb-2 block text-sm font-medium text-gray-900 dark:text-white">
        {label}

        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => renderField(field)}
        />
      </label>
      <ValidationError name={name} />
    </>
  );
};
