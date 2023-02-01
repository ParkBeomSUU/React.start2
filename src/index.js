import React from "react";
import ReactDOM from "react-dom"; // 브라우저에 있는 실제 DOM 내부에 리액트 컴포넌트를 렌더링하겠다는 것을 의미
import "./App.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
