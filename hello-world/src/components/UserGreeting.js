import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props){
        super(props)

        this.state = {
            isLoggedIn:false    
        }
    }
    // eslint-disable-next-line react/require-render-return
    render() {
        let message
        if (this.state.isLoggedIn) {
            message = <div>Welcome Mohd kalam</div>
        }else{
           message = <div>Welcome Guest</div>
        }
        return <div>{message}</div>
        // if(this.state.isLoggedIn){
        //     return <div>Welcome Mohd kalam</div>
        // }else {
        //     return <div>Welcome Guest</div>
        // }
        // return (
        //     <div>
        //         <div>Welcome Mohd Kalam</div>
        //         <div>Welcome guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
