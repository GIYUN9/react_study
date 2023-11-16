import React, {useMemo, useState} from 'react';
/*
    uesMemo
    uesMemo는 Memoization(메모이제이션) 기법을 사용한 react hook이다
    모메이제이션기법은 한번 연산해본 결과를 기억해두고,
    다시 동일한 입력이 들어오면 기억해둔 데이터를 변환하는 방법이다.

    사용법
    useMemo(() => {},[])

    첫 번째 인자로는 메모이제이션해줄 콜백함수를 넣는다.
    두 번째 인자로는 추적할 요소의 배열을 넣는다.
*/
const UseMemoTest = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const getResult = useMemo(() => {
        console.log("useMemo 없이 계산함수 작성")
        const sum = num1 + num2;

        return {sum}
    }, [num1, num2])

    const {sum} = getResult;

    return (
        <div>
            num1 값 : {num1}
            <button onClick={() => setNum1(num1 + 1)}>num1 1증가</button>
            <br/>
            num2 값 : {num2}
            <button onClick={() => setNum2(num2 + 1)}>num2 1증가</button>
            <br/>
            {sum}
            <br/>
            <button onClick={() => setNum1(0)}>num1초기화</button>
            <button onClick={() => setNum2(0)}>num2초기화</button>
        </div>
    );
};

export default UseMemoTest;