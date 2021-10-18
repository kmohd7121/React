import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class Lifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Mohd Kalam'
        }
        console.log('LifecyleA constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDrivedStatefromProps')
        return null
    }
    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleA shouldcomponent update')
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('LifeCycle A get snapeshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifeCycle A get  componentDidUpdate')
    }
    changeState = ()=> {
        this.setState({
            name:'Codevolution'
        })
    }
    
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>
                Lifecycle A
            </div>
            <button onClick={this.changeState}>change state</button>
            <LifecycleB/>
            </div>
            
        )
    }
}

export default Lifecycle
