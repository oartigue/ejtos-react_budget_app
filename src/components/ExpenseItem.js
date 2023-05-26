import React, { useContext } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { IoAddCircle, IoRemoveCircle } from "react-icons/io5"
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><IoAddCircle size='2.2em' color="green" onClick={event=> increaseAllocation(props.name)}>+</IoAddCircle></td>
        <td><IoRemoveCircle size='2.2em' color="red" onClick={event=> decreaseAllocation(props.name)}>+</IoRemoveCircle></td>
        <td><FaTimesCircle size='1.5em' onClick={handleDeleteExpense}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;
