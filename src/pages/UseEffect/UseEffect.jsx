import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [increaseCount, setIncreaseCount] = useState(0)
    const [decreaseCount, setDecreaseCount] = useState(0)

    //function to increase the count value. 
    const handleIncrease = () => {
        setIncreaseCount(increaseCount + 1)
        // console.log(count);
    }

    const handleDecrease = () => {
        setDecreaseCount(decreaseCount - 1)
        // console.log(count);`
    }




    // Type1 use of useEffect(jaba certain value eg: like numbers etc haru increase garera backend ma store garne. )
    useEffect(() => {
        // count ko value kati xa tyo backend samma pugauxa yesle:
        if (increaseCount !== 0) {
            // document.title = count
            console.log("Count value Changed.");
        }
    }, [increaseCount, decreaseCount])

    return (
        <div>
            <div >{increaseCount}</div>
            <button onClick={handleIncrease}>+</button>
            <div>{decreaseCount}</div>
            <button onClick={handleDecrease}>-</button>
        </div>
    )
}
export default UseEffect
