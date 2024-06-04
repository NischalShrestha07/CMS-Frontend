import { useState } from "react"


const Test = () => {
    const [count, setCount] = useState(0)

    //normal Function
    // function increaseCount() {
    //     setCount(count + 1)
    //     console.log(count);
    // }
    // function decreaseCount() {
    //     setCount(count - 1)
    //     console.log(count);
    // }

    // ARROW FUNCTION:
    const increaseCount = () => {
        setCount(count + 1)
        console.log(count);

    }

    const decreaseCount = () => {
        if (count > 0) {

            setCount(count - 1)
            console.log(count);
        }
        else {
            stop
        }
    }




    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
        </div>

    )
}

export default Test
