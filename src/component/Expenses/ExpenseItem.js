import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// arrow 함수
const ExpenseItem = (props) => {
  // 리액트 훅 : useState
  // 오직 컴포넌트 함수 내에서 호출되어야 하고, 길이 2의 배열을 반환
  // 배열의 첫 번째 요소(title) : 관리되고 있는 값, 현재 상태값
  // 배열의 두 번째 요소(setTitle) : 나중에 새로운 title을 설정하기 위해 호출될 수 있는 함수 (첫 번째 요소의 값을 업데이트하는 함수)
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //     setTitle('Updated!');
  //     console.log(title);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
