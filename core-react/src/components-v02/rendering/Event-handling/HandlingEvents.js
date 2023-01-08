import React from 'react';

const HandlingEvents = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('You clicked submit');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
};

export default HandlingEvents;
