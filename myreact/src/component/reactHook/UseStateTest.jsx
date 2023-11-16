import React, { useState }from 'react';

/**
 * 
 * Hook이란
 * 함수형 컴포넌트에서 react state와 생명주기 기능을 사용할 수 있게 해주는 함수이다.
 * hook은 class안에서는 동작하지 않는다. 대신 class없이 React를 사용할 수 있게 해준다.
 * 
 * state : 컴포넌트의 상태를 말한다.
 * useState : 컴포넌트의 상태를 생성하고 관리할 수 있게 해주는 react hook이다.
 * 
 * 사용법
 * import React, { useState }from 'react'를 통해 useState를 import시킨다.
 * 
 * const [state, setState] = useState(초기값);
 * 컴포넌트의 현재 상태값은 state라는 변수에 들어있고
 * state를 변경하고 싶으면 setState함수를 이용해서 변경할 수있다.
 * 이때 state와 setState의 이름은 마음대로 지정할 수 있다.
 * 
 */

const UseStateTest = () => {
    // let num = 0;
    const [num, setNum] = useState(0);

    const onClick1 = () => {

        setNum(num + 1);
        console.log(num)
    }

    const onClick2 = () => {

        setNum(num - 1);
        console.log(num)
    }

    console.log('UseStateTest 업데이트');
    return (
        <div>
            <span>COUNT : {num}</span>
            <div>
                <button onClick={onClick1}>+</button>
                <button onClick={onClick2}>-</button>
            </div>
        </div>
    );
};

export default UseStateTest;