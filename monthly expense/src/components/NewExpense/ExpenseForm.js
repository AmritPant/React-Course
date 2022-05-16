import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = function (props) {
  const [entertedTitle, setEntertedTitle] = useState('');
  const [entertedAmount, setentertedAmount] = useState('');
  const [entertedDate, setentertedDate] = useState('');

  const titleChangeHandler = event => {
    setEntertedTitle(event.target.value);
  };

  const amountChangeHandler = event => {
    setentertedAmount(event.target.value);
  };

  const dateChangeHandler = event => {
    setentertedDate(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    const expenseData = {
      title: entertedTitle,
      amount: +entertedAmount,
      date: new Date(entertedDate),
    };

    setEntertedTitle('');
    setentertedAmount('');
    setentertedDate('');

    props.onSaveExpenseData(expenseData);
    return expenseData;
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Tittle</label>
          <input
            type="text"
            value={entertedTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>amount</label>
          <input
            type="Number"
            min="0.01"
            step="0.01"
            value={entertedAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            value={entertedDate}
            max={2021 - 12 - 30}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
