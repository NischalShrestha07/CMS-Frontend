import React from 'react'

const Button = (props) => {
    const title = props.title
    const color = props.color
    const subTitle = props.subTitle
    return (
        <div>

            <button style={{ fontSize: "45px", background: color }}>{title}</button>
            <p style={{ background: "greenyellow" }}>{subTitle}</p>

        </div >
    )
}

export default Button
