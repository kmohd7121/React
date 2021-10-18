import React from 'react'

function ChildConmponent(props) {
    return (
        <div>
            <button onClick={props.greetHandler}>Greet Parent</button>
        </div>
    )
}

export default ChildConmponent
