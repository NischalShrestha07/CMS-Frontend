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
    /*
    // Type1 use of useEffect
        // // kohi manche first time site ma auda or first time refresh/mount/render huda tala ko use hunx 
    // useEffect(() => {
        //     console.log("Welcome to site");
        // }, [])
    */

    // Type2 use of useEffect(jaba certain value eg: like numbers etc haru increase garera backend ma store garne. )
    // useEffect(() => {
    //     // count ko value kati xa tyo backend samma pugauxa yesle:
    //     if (increaseCount !== 0) {
    //         // document.title = count
    //         console.log("Count value Changed.");
    //     }
    // }, [increaseCount, decreaseCount])


    useEffect(() => {
        console.log("Bye Bye ");
    })

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
