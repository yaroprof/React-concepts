import React from 'react';

const EventHandlingSubmission = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hello, click');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>submit</form>
    </div>
  );
};

export default EventHandlingSubmission;
