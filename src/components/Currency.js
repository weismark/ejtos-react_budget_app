import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
    }

    return (
<div className='alert' style={{ backgroundColor: '#5cb85c', color: 'white' }}>
    <span>Currency ({currency})</span>
    <select value={currency} onChange={handleCurrencyChange} style={{ 
        backgroundColor: '#5cb85c', 
        color: 'white', 
        borderColor: 'white',
        marginLeft: '10px'
    }}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
    </select>
</div>

    );
};

export default Currency;