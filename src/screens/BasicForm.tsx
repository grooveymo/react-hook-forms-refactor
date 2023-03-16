import React from "react";
import { Form } from "../components/Form";
import { Field } from "../components/Field";
import { InputText } from "../components/InputText";
import { InputNumber } from "../components/InputNumber";
import * as Yup from "yup";

type FormValues = {
  name: string;
  email: string;
  age: number;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).required("Name is required"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  age: Yup.number().required("Age is required")
});

export const BasicForm = () => {
  const initialValues: FormValues = {
    name: "",
    email: "",
    age: 0
  };

  return (
    <>
      <h1 className="text-xl flex justify-around items-top m-3 p-3">
        React Hook Forms
      </h1>
      <section>
        <Form
          name="details"
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Field
            name="name"
            label="NAME"
            renderField={(field) => {
              // console.log("field:", field);
              return <InputText field={field} placeholder="Enter name" />;
            }}
          />
          <Field
            name="email"
            label="EMAIL"
            renderField={(field) => {
              // console.log("field:", field);
              return <InputText field={field} placeholder="Enter email" />;
            }}
          />
          <Field
            name="age"
            label="AGE"
            renderField={(field) => {
              // console.log("field:", field);
              return <InputNumber field={field} placeholder="Enter age" />;
            }}
          />
        </Form>
      </section>
    </>
  );
};
