import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";

function App() {
  const name = "범수씨";
  const style = {
    backgroundColor: "black", //리액트는 - 안쓰고 카멜스타일로 해줘야함
    color: "aqua",
    fontSize: 24, // 기본 단위 px
    padding: "1rem" // 다른 단위 사용 시 문자열로 설정
  };
  return (
    <>
      <Hello />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
      {/* 주석은 화면에 보이지 않습니다 */}
      /* {} 해줘야 중괄호가 되지요 */
      <Wrapper>
        <Hello name="bsbs야" color="red" isSpecial />
        <Hello color="blue" />
      </Wrapper>
      <Counter />
    </>
  );
}

export default App;
