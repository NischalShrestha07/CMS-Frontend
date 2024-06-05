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


    // Type1 use of useEffect
    // // kohi manche first time site ma auda or first time refresh/mount/render huda tala ko use hunx 
    // useEffect(() => {
    //     console.log("Welcome to site");
    // }, [])


    // Type1 use of useEffect(jaba certain value eg: like numbers etc haru increase garera backend ma store garne. )
    useEffect(() => {
        // count ko value kati xa tyo backend samma pugauxa yesle:
        if (count !== 0) {
            // document.title = count
            console.log("Count value Changed.");
        }
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
