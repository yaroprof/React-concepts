import React from 'react';

const ChildrenProp03 = (props) => {
  return <div>
    {props.children(props.isVisible)}
  </div>;
};

export default ChildrenProp03;
