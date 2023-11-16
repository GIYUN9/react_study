import React, {useEffect, useState} from 'react';
/*
    useEffect
    컴포넌트가 랜더링 될때 작업을 실행할 수 있도록 하는 react hook으로
    클래스형 컴포넌트의 생명주기메소드의 역할을 할 수 있다.
    컴포넌트가 마운트 됐을 때(처음 나타났을 대), 언마운트됐을 때(사라질 때)
    그리고 업데이트 됐을 때(특정 state나 props가 바뀌었을 때)

    사용법
    useEffect(effect, []);
    첫번째 인자(effect)는 함수, 두번째 인자는 배열
*/
const UseEffectTest = () => {
    const [name, setName] = useState("최지원");
    const [num, setNum] = useState(0);

    const handleKeyUpName = (ev) => {
        setName(ev.target.value);
    }

    const handleClickNum = () => {
        setNum(num + 1);
    }

    //랜더링이 되었을 때, 그리고 name state가 변경될 때 마다 console.log가 찍힌다.
    //componentDidMount & componentDidUpdate의 역할을 대체할 수 있다.
    useEffect(()=>{
        // console.log("배열요소 없는 useEffect호출");
    },)

    //특정한 값이 변경될 때 effect함수를 실행하고 싶은 경우 배열에 그값을 넣어주면된다.
    //빈배열을 전달한 경우 컴포넌트가 최초mount될 때만 실행된다
    useEffect(()=>{
        // console.log("빈 배열소를 추가한 useEffect호출");
    },[])

    //num값이 변경될때는 console.log가 동작하지 않지만
    //name값이 변경될때는 log가 출력되는것으로 보아 배열안의 state를
    //추적하여 effect를 발생시키는 것을 알 수 있음
    useEffect(()=>{
        console.log("name state를 추적하는 useEffect호출", name);
    },[name])

    // return함수를 추가하여 componentWillUnmount 역할을 할 수 있다.
    useEffect(()=>{
        return () => {
            console.log("컴포넌트가 삭제될 때의 useEffect호출", name);
        }
    },[name])

    return (
        <div>
            <p>안녕하세요. {name}입니다.</p>
            <input type="text" onKeyUp={handleKeyUpName}/>
            <p>{num}번 클릭</p>
            <button onClick={handleClickNum}>+</button>
        </div>
    );
};

export default UseEffectTest;