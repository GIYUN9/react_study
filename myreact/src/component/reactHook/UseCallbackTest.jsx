import React, { useState, useCallback, useEffect } from 'react';

/**
 * 
 * useCallback
 *  useCallback 또한 메모이제이션 기법으로 컴포넌트 선능을 최적화시켜주는 도구이다.
 *  useMemo같은 경우 함수가 리턴하는 결과값을 메모이제이션 하는 것
 *  useCallback은 인자로 전달한 콜백함수 그 자체를 메모이제이션 하는 것이다.
 * 
 * 사용법
 *  const funkName = useCallback(() -> {
 *      return result;
 * }, [item])
 * 
 * 함수를 그대로 useCallback으로 감싸주고
 * 두번째 인자값에 함수에 사용할 값들을 넣어주면 된다.
 */

const UseCallbackTest = () => {
    const [num, setNum] = useState(0);
    
    //num에 어떤 숫자가 들어있는지 확인만 해주는 함수
    // const checkNumber = () => {
    //     console.log(`숫자 : ${num}`);
    //     return;
    // }

    const checkNumber = useCallback(() => {
        console.log(`숫자 : ${num}`);
        return;
    },[]);

    useEffect(() => {
        console.log("checkNumber 함수 변경");
    }, [checkNumber]);

    return (
        <div>
            <input 
                type='number'
                value={num}
                onChange={(e) => setNum(e.target.value)}/>
            <br />
            <button onClick={checkNumber}>숫자확인</button>
        </div>
    );
};

export default UseCallbackTest;