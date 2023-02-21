import React from 'react';

const ChildrenProp02 = (props) => {
  return <div>{props.isVisible && props.children}</div>;
};

export default ChildrenProp02;
