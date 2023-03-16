Tasks
[1] Implement File upload example
[2] Implement example where we utilise something like setFieldValue inside the render function e.g. 
<Form>
{ ({values, setFieldValue}) => {
  <InputText onClick={setFieldValue(..)}>
}}
</Form> 
Doesn't look like we can access within render logic, but can do outside
using useFormContext();
Note : the useForm hook provided by the react-hook-form library has a similar function to yup's setFieldValue called setValue.
[3] Implement Modal example
[4] Implement Nested example
[5] Support enableReinitialization like behaviour - e.g., revalidate when initial values are reset 

======================================================================
Our solution needs to cater for the following:

Support static and dynamic validation - https://stackoverflow.com/questions/55382306/typescript-distributive-conditional-types

Supports File upload validation 

Supports a range of validation libraries 

Supports 3rd party component libraries e.g., if we use a Select component, its state can be managed by the form 

Supports tracking of form fields e.g., dirty, touched 

Supports React controlled components 

Supports Modal based forms 

Supports imperative updating of a form value e.g., setFieldValue 

Support for nested forms 

Support access to Form context inside Child components e.g., useFormContext 

Support for Wizard-type flows 

Support for validating being triggered onBlur, onChange, onSubmit 

Support for Form-based tables (think Request Policy) 

Support enableReinitialization like behaviour - e.g., revalidate when initial values are reset 

Support for nested objects/arrays - might be a requirement for validation library possibly? 