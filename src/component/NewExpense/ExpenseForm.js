import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
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
  };

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
  };

  const submitHandler = (event) => {
    event.preventDefault(); // preventDefault() : 개발 서버로 요청을 보내는 것을 막음. 따라서 웹페이지가 다시 로드되지 않음.

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData);

    // state 초기화
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
