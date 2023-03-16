import React from 'react'
import * as Yup from 'yup'
import { Form } from '../components/Form'
import { Field } from '../components/Field'
import { InputText } from '../components/InputText'
import { InputNumber } from '../components/InputNumber'

export type FormType = {
  name: string
  email: string
}
export type FormTypeWithAge = {
  name: string
  email: string
  age: number
}

export const DynamicValidation = () => {
  const initialData = {
    name: '',
    email: '',
    // age: 0
  }
  // const [schema, setSchema] = React.useState<FormType | FormTypeWithAge>(
  const [schema, setSchema] = React.useState<Yup.ObjectSchema<FormType | FormTypeWithAge>>(
    Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
    })
  )

  // const { register, handleSubmit, reset } = useForm({
  //   defaultValues: initialData,
  //   resolver: YupResolver(schema)
  // });

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  const handleValidationChange = () => {
    const newSchema = Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().required('Email is required'),
      age: Yup.number().required('Age is required').min(16),
    })

    setSchema(newSchema)
    // reset();
  }

  return (
    <>
      <h1>Dynamic Validation</h1>
      <section>
        This example demonstrates how to implement Dynamic Form Validation using React Hook Forms, Formik & Yup
      </section>

      <section>
        <Form
          name="dynamic-validation"
          initialValues={initialData}
          validationSchema={schema}
          // onSubmit={handleSubmit(onSubmit)}
        >
          <Field
            name="name"
            label="NAME"
            renderField={(field) => {
              // console.log("field:", field);
              return <InputText field={field} placeholder="Enter name" />
            }}
          />
          <Field
            name="email"
            label="EMAIL"
            renderField={(field) => {
              // console.log("field:", field);
              return <InputText field={field} placeholder="Enter email" />
            }}
          />

          {schema.fields?.age && (
            <Field
              name="age"
              label="AGE"
              renderField={(field) => {
                // console.log("field:", field);
                return <InputNumber field={field} placeholder="Enter age" />
              }}
            />
          )}

          {/* <label>
            Name:
            <input type="text" {...register("name")} />
          </label>

          <label>
            Email:
            <input type="email" {...register("email")} />
          </label> */}

          {/* {schema.fields.age && (
            <label>
              Age:
              <input type="number" {...register("age")} />
            </label>
          )} */}

          {/* <button type="submit">Submit</button> */}
          {/* <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            type="submit"
          >
            Submit
          </button>
 */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            type="button"
            onClick={handleValidationChange}>
            Add Age Validation
          </button>

          {/* <button type="button" onClick={handleValidationChange}>
            Add Age Validation
          </button> */}
        </Form>
      </section>
    </>
  )
}
