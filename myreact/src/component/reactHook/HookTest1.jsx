import React, { useState } from 'react';

const MAX_CAPACITY = 10;
const HookTest1 = (props) => {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);


    return (
        <div>
            
        </div>
    );
};

export default HookTest1;