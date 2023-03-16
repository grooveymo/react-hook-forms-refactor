import React from "react";
import { useFormContext } from "react-hook-form";

export interface ValidationErrorProps {
  name: string;
}

export const ValidationError = ({ name }: ValidationErrorProps) => {
  const {
    formState: { errors }
  } = useFormContext();

  const validationError = errors[name]?.message;

  if (!validationError) {
    return null;
  }
  return <div className="ml-4 text-red-600">{validationError}</div>;
};
