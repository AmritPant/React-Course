import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from '../NewExpense/ExpensesChart';

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = props.items.filter(
    expenses => expenses.date.getFullYear() === +filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filterExpenses} />
      <ExpenseList items={filterExpenses} />
    </Card>
  );
};

export default Expenses;
