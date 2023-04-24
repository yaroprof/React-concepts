import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
});

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
        </ul>
      </nav>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name:
          <input type="text" {...register("firstName")} />
          {errors.firstName && (
            <span className="error-message">{errors.firstName.message}</span>
          )}
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" {...register("lastName")} />
          {errors.lastName && (
            <span className="error-message">{errors.lastName.message}</span>
          )}
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
