import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});

const Form = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const setFormValues = (data) => {
    localStorage.setItem("formData", JSON.stringify(data));
  };

  const onSubmit = (data) => {
    setFormValues(data);
    reset();
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" {...register("firstName")} />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" {...register("lastName")} />
      {errors.lastName && <p>{errors.lastName.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
