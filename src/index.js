import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.createRoot() : React를 사용하여 구축할 전체 UI의 메인 엔트리 포인트 혹은 메인 훅을 생성한다.
// React 애플리케이션이 렌더링될 위치 명시
// id="root"는 public/index.html 에서 확인 가능한데, 해당 div에 react app UI가 주입된다.
const root = ReactDOM.createRoot(document.getElementById('root'));
// render() : 해당 위치에서 무엇이 렌더링되어야 하는지 명시
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
