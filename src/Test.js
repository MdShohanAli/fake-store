import React, { useState } from 'react';

const Test = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)} className='ms-3 p-3'> + </button>
            <button onClick={() => setCount(count - 1)} className='ms-3 p-3'>-</button>
        </div>)
};

export default Test;