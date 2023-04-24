import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Form from './Form'

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };;

  return (
    <Router>
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
    <Routes>
      <Route path="/" element={<h1>Welcome to my React application with React Router and Forms options</h1>} />
      <Route path="/form" element={<Form register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} errors={errors} />} />

      {/* <Route path="/form" element={
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            First Name:
            <input type="text" {...register("firstName")} />
          </label>
          <br />
          <label>
            Last Name:
            <input type="text" {...register("lastName")} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      } /> */}
    </Routes>
  </Router>
  );
}

export default App;
