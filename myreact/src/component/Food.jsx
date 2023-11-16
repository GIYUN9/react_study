import React from "react";

// JSX : 리액트에서 사용하는 기본적인 문법체계
//     : 자바스크립트와 HTML을 함께 사용한다
//     : HTML을 사용하던 중 스크립트와 함께 사용하고 싶을 때는 {}를 통해 사용하면 됨

function Food(props){
    return(
        <div>
            <h1>{`이 음식의 이름은 ${props.name}`}</h1>
            <h2>{`이 음식은 1인분에 ${props.price}원 입니다.`}</h2>
        </div>
    )
}

export default Food;