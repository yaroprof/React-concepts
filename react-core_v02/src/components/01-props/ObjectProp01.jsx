import React from 'react';

const ObjectProp = ({person}) => {
  return (
    <div>
      <h2>{person.name}</h2>
      <p>{person.age}</p>
    </div>
  );
};

export default ObjectProp;
