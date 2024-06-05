import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1)
        // console.log(count);
    }

    const decreaseCount = () => {
        setCount(count - 1)
        // console.log(count);`
    }



    // // kohi manche first time site ma auda or first time refresh/mount/render huda tala ko use hunx 
    // useEffect(() => {
    //     console.log("Welcome to site");
    // }, [])


    useEffect(() => {
        console.log("Count value Changed.");
    }, [count])

    return (
        <div>
            <div >{count}</div>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
        </div>

    )
}

export default UseEffect
