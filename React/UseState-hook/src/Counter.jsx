import React,{useState} from 'react';

function Counter(){
    const [count,setCount] = useState(0);

    const incrementCounter = () =>{
        setCount(count+1);
    }

    const decrementCounter = () =>{
        setCount(count - 1);
    }

    const resetCounter = () =>{
        setCount(0);
    }
    return (
        <div className='counter-container'>
            <p className='count-display'>{count}</p>
            <button className='counter-button' onClick={decrementCounter}>Decrement </button>
            <button className='counter-button' onClick={resetCounter}>Reset </button>
            <button className='counter-button' onClick={incrementCounter}>Increment </button>
        </div>
    )
}

export default Counter;