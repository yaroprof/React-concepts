import React from 'react';

const ConditionalExpression = () => {
  const todoList = ['read book', 'clean self room', 'fitness'];
  const todoLength = todoList.length;
  return (
    <div>
      <b>
        {todoLength > 0 ? (
          <h2>`This person have {todoLength} tasks`</h2>
        ) : (
          'This person haven`t any task'
        )}
      </b>
    </div>
  );
};

export default ConditionalExpression;
