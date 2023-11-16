import React from 'react';

const Clock = () => {
    return (
        <div>
            <h1>안녕~ 지금 시간은</h1>
            <h2>{new Date().toLocaleTimeString()}</h2>
        </div>
    );
};

export default Clock;