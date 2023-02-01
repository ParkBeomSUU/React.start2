import React from "react";

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      {isSpecial ? <b>*</b> : null}
      안녕하세요 {name}
    </div>
    //isSpecial 값이 true 라면 <b>*</b> 를, 그렇지 않다면 null 을 보여주도록 한다.
    //isSpecial && <b>*</b> 의 결과는 isSpecial 이 false 일땐 false 이고, isSpecial이 true 일 땐 <b>*</b>
  );
}
//<div style={{ color: props.color }}>안녕하세요 {props.name}</div>; //app에 있는 name 함수 가져오게하는 props

Hello.defaultProps = {
  name: "이름없음"
  // props 를 지정하지 않았을 때 기본적으로 사용 할 값을 설정하고 싶다면
  //컴포넌트에 defaultProps 라는 값을 설정
};

export default Hello;
