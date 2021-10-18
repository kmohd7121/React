import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Mohd Kalam'
        }
        console.log('LifecyleB constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDrivedStatefromProps')
        return null
    }
    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleB shouldcomponent update')
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('LifeCycle B get snapeshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifeCycleB get  componentDidUpdate')
    }
    
    render() {
        console.log('LifecycleB render')
        return (
            <div>
                Lifecycle B
            </div>
        )
    }
}

export default LifecycleB
