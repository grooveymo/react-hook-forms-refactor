import React from "react";
import * as Yup from "yup";
import { Form } from "../components/Form";
import { Field } from "../components/Field";
import { InputText } from "../components/InputText";
import { InputNumber } from "../components/InputNumber";

export const DynamicValidation = () => {
  const initialData = {
    name: "",
    email: "",
    age: 0
  };
  const [schema, setSchema] = React.useState(
    Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required")
    })
  );

  // const { register, handleSubmit, reset } = useForm({
  //   defaultValues: initialData,
  //   resolver: YupResolver(schema)
  // });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleValidationChange = () => {
    const newSchema = Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().required("Email is required"),
      age: Yup.number().required("Age is required")
    });

    setSchema(newSchema);
    reset();
  };

  return (
    <>
      <h1>Dynamic Validation</h1>
      <section>
        This example demonstrates how to implement Dynamic Form Validation using
        React Hook Forms, Formik & Yup
      </section>

      <section>
        <Form
          name="dynamic-validation"
          initialValues={initialData}
          validationSchema={schema}
          // onSubmit={handleSubmit(onSubmit)}
        >
          <label>
            Name:
            <input type="text" {...register("name")} />
          </label>

          <label>
            Email:
            <input type="email" {...register("email")} />
          </label>

          {schema.fields.age && (
            <label>
              Age:
              <input type="number" {...register("age")} />
            </label>
          )}

          <button type="submit">Submit</button>
          <button type="button" onClick={handleValidationChange}>
            Add Age Validation
          </button>
        </Form>
      </section>
    </>
  );
};
