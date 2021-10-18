import React, { createElement } from "react";

const Hello = () =>{
//    return(
//         <div>
//             <h1>Hello Rehan</h1>
//         </div>
//     )
    console.log('mohd kalam hiiiiiiiiiiiiiii.........')
    return React.createElement('div' ,{id:'hello',className:'dummyClass'},createElement('h1',null,'Hello Farhan'))
} 
export default Hello