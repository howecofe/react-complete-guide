import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        // 방법 1
        setEnteredTitle(event.target.value);

        // 방법 2
        // setUserInput({
        //     ...userInput, // ...userInput : 기존에 userInput에 있던 값(키:값)을 새로운 객체로 복사 (이전 상태 의존)
        //     enteredTitle: event.target.value // enteredTitle는 Overriding
        // });

        // 방법 3 - prevState: 이전 상태 의존 시 사용
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // })
    };

    const amountChangeHandler = (event) => {
        // 방법 1
        setEnteredAmount(event.target.value);

        // 방법 2
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });

        // 방법 3
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value };
        // })
    }

    const dateChangeHandler = (event) => {
        // 방법 1
        setEnteredDate(event.target.value);

        // 방법 2
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });

        // 방법 3
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value };
        // })
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;