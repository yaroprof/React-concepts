import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
});

function Form({ register, handleSubmit, onSubmit, errors }) {
  const { formState } = useForm({ mode: "onChange", validationSchema });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        First Name:
        <input type="text" {...register("firstName")} />
        {errors.firstName && <span>{errors.firstName.message}</span>}
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" {...register("lastName")} />
        {errors.lastName && <span>{errors.lastName.message}</span>}
      </label>
      <br />
      <button type="submit" disabled={!formState.isValid}>
        Submit
      </button>
    </form>
  );
}

export default Form;
