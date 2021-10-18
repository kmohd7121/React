import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comment:'',
             topic:'react'
        }
    }
    handlerUsenameChange = (event) =>{
        this.setState({
            username:event.target.value
        })


    }
    handlerCommentsChange = (event) =>{
        this.setState({
            comment:event.target.value
        })
    }
    handleTopicChange = (event) =>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit = event =>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault()
    }
    
    render() {
        const {username,comment,topic} =this.state
        return (
           <form onSubmit={this.handleSubmit}>
               <div>
                   <label>UserName</label>
                   <input type="text" value={username} 
                   onChange={this.handlerUsenameChange}/>
                </div>
                <div>
                    <label>comment</label>
                    <textarea value={comment} 
                    onChange={this.handlerCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
           </form>
        )
    }
}

export default Form
