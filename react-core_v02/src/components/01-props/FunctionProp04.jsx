import React from "react";

const FunctionProp04 = (props) =>{
  const message = props.getMessage()
  return(
    <div>
      <p>{message}</p>
    </div>
  )
}

export default FunctionProp04;