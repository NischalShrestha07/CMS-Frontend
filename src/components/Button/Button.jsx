import React from 'react'

const Button = (props) => {
    const title = props.title
    const color = props.color

    return (
        // <div>
        <button style={{ fontSize: "45px", background: color }}>{title}</button>
        // {/* </div > */ }
    )
}

export default Button
