import React from 'react'

const Button = (passedValue) => {
    return (
        <div>
            <button style={{ fontSize: "45px" }}>{passedValue.title}</button>
        </div >
    )
}

export default Button
