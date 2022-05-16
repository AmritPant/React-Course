import React, { useState } from 'react';
import './NewExpense.css';
import './ExpenseForm';
import ExpenseForm from './ExpenseForm';

const NewExpense = props => {
  const [isAddBtnShowing, setAddBtnShowing] = useState(true);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onSaveExpenseData(expenseData);
    setAddBtnShowing(true);
  };

  const addNewExpenseHandler = () => {
    setAddBtnShowing(false);
  };

  const cancelButtonHandler = () => {
    setAddBtnShowing(true);
  };

  return (
    <div className="new-expense">
      {isAddBtnShowing && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
      {!isAddBtnShowing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelButtonHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
