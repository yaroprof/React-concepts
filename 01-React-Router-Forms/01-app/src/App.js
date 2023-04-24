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
    schema
      .validate(data, { abortEarly: false })
      .then((values) => {
        console.log(values);
        values(values);
        setSuccessMessage("Form successfully submitted!");
      })
      .catch((err) => {
        errors(err.errors);
      });
  };
  
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        First Name:
        <input type="text" {...register("firstName", { required: true })} />
        {errors.firstName && <span>This field is required</span>} {/* add error message */}
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" {...register("lastName", { required: true })} />
        {errors.lastName && <span>This field is required</span>} {/* add error message */}
      </label>
      <br />
      <button type="submit">Submit</button>
      {isSubmitted && <span>Form submitted successfully!</span>} {/* add success message */}
    </form>
  );
  
  }
export default Form;
