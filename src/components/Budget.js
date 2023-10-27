import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const newBudgetValue = Number(event.target.value);
        const totalSpending = expenses.reduce((total, expense) => total + expense.cost, 0);

        if (newBudgetValue > 20000) {
            alert("The budget cannot exceed 20,000");
        } else if (newBudgetValue < totalSpending) {
            alert("You cannot reduce the budget value lower than the spending");
        } else {
            setNewBudget(newBudgetValue);
            dispatch({ type: 'SET_BUDGET', payload: newBudgetValue });
        }
    }
    
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;