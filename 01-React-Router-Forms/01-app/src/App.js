import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});

const Form = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        First Name:
        <input type="text" {...register("firstName")} />
      </label>
      {errors.firstName && <p>{errors.firstName.message}</p>}
      <br />
      <label>
        Last Name:
        <input type="text" {...register("lastName")} />
      </label>
      {errors.lastName && <p>{errors.lastName.message}</p>}
      <br />
      <button type="submit">Submit</button>
      {isSubmitted && <p>Form submitted successfully!</p>}
    </form>
  );
};

export default Form;
