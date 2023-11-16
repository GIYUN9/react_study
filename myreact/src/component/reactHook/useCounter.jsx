import React, { useState } from 'react';

const useCounter = (initValue) => {
    const [count, setCount] = useState(initValue);

    const increaseCount = setCount((count) => count + 1);
    const decreaseCount = setCount((count) => count - 1);
    return [count, increaseCount, decreaseCount];
};

export default useCounter;