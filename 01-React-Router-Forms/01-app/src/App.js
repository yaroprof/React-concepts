import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import React, { useRef } from 'react';

import { useForm } from 'react-hook-form';
import './App.css';

function Home() {
  return (
    <div>
      <h1>Welcome to my React Router app!</h1>
      <p>Click on the links below to navigate to other pages:</p>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>We are a company that specializes in React development.</p>
    </div>
  );
}

function Contact() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input type="text" name="name" ref={register({ required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" ref={register({ required: true })} />
          {errors.email && <span>This field is required</span>}
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" ref={register({ required: true })} />
          {errors.message && <span>This field is required</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
