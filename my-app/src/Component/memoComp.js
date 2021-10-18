import React from 'react'

function memoComp({name}) {
    console.log('Rendering Memo component')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(memoComp)
