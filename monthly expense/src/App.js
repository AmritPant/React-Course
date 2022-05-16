import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = function () {
  const [expenses, setExpense] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = expense => {
    setExpense(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  // function saveExpenseDataHandeler(entertedExpenseData) {
  //   const expenseData = {
  //     ...entertedExpenseData,
  //   };
  //   console.log(expenseData);
  //   console.log(expenses);

  // }

  return (
    <div>
      <NewExpense onSaveExpenseData={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

// Parent to child
//  child: props   ---- -
//  parent: argument --- Data

// child to parent
//  child: props
//  parent: argument -- Funcion
