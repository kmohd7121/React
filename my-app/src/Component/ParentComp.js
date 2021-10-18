import React, { Component } from 'react'
import memoComp from './memoComp'

import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Mohd kalam'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Mohd Kalam'
            })
        },2000)
    }
    
    render() {
        console.log('****************Parent componet render*******************')
        return (
            <div>
                Parent Component
                <memoComp name={this.state.name}/>
                {/* <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/> */}
            </div>
        )
    }
}

export default ParentComp
