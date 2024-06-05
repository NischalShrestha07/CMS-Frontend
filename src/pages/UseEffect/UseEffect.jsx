import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)
    const [decreaseCount, setDecreaseCount] = useState(0)
    const increaseCount = () => {
        setCount(count + 1)
        // console.log(count);
    }

    const handleDecrease = () => {
        setDecreaseCount(decreaseCount - 1)
        // console.log(count);`
    }




    // Type1 use of useEffect(jaba certain value eg: like numbers etc haru increase garera backend ma store garne. )
    useEffect(() => {
        // count ko value kati xa tyo backend samma pugauxa yesle:
        if (count !== 0) {
            // document.title = count
            console.log("Count value Changed.");
        }
    }, [count, decreaseCount])

    return (
        <div>
            <div >{count}</div>
            <button onClick={increaseCount}>+</button>
            <div>{decreaseCount}</div>
            <button onClick={handleDecrease}>-</button>
        </div>
    )
}
export default UseEffect
