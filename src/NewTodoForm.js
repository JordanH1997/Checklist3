import React, { Component } from 'react';
import './App.css';

class newTodoForm extends Component{

    constructor(props){
        super(props)

        this.state = {
            contentInput:'',
            priorityInput:''
        }
    }

    handleContentInputChange = (e)=>{
        this.setState({
            contentInput: e.target.value
        })
    }
    handlePriorityInputChange = (e)=>{
        this.setState({
            priorityInput: e.target.value
        })
    }
    handleAddTodoClick = (e)=>{
        e.preventDefault()
        var data = {
            content: this.state.contentInput,
            priority: this.state.priorityInput
        }
        this.props.addTodo(data)
        this.setState({
            contentInput:'',
            priorityInput:''
        })
    }

    render(){

        return(
            <form className="note-body">
					  	
            <div className="form-group">
                <label htmlFor="note-input">New note:</label>
                <input type="text" className="form-control" id="note-input" value ={this.state.contentInput} onChange={this.handleContentInputChange}/>                 
            </div>
              
            <div className="form-group">
                <label htmlFor="priority-input">Priority:</label>
                <input type="text" className="form-control" id="priority-input" value ={this.state.priorityInput} onChange={this.handlePriorityInputChange}/>
            </div>
            
            <button type="submit" className="btn btn-primary" onClick={this.handleAddTodoClick}>Add</button>

            </form>
        )
    }
}

export default newTodoForm