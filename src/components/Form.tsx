import React from "react";
import {
  useForm,
  FormProvider,
  FieldValues,
  ValidationMode
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export interface FormProps<T extends FieldValues> {
  name: string;
  initialValues: T;
  validationSchema: Yup.ObjectSchema<T>;
  mode?: keyof ValidationMode | undefined;
}

export const Form = <T extends FieldValues>({
  name,
  initialValues: defaultValues,
  validationSchema,
  mode = "onBlur",
  children
}: React.PropsWithChildren<FormProps<T>>) => {
  const methods = useForm<FieldValues>({
    defaultValues,
    resolver: yupResolver(validationSchema), // configurable to use zod
    mode: mode // determines when validation runs e.g. onChange | onBlur | onSubmit | onTouched | all = 'onSubmit'
  });

  // const onSubmit = (data: any) => console.log(data);
  const onSubmit = (data: any) => alert(data);
  return (
    <div className="w-1/2 border-solid border-2 border-indigo-600 ml-4 ">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {children}
          <div className="mt-4 mr-8 flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
