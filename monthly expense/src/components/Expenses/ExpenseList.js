import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = function (props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expense Found</h2>;
  }

  props.items.map(expense => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));

  return (
    <ul className="expenses-list">
      {props.items.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
