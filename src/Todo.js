import React, { Component } from 'react';
import './App.css';

class Todo extends Component{

    constructor(props){
        super(props)

        this.state = {
            
            isContentUpdating: false,
            isPriorityUpdating: false,
            contentInput: this.props.content
        }
    }
    handleContentDoubleClick = (e)=>{
        this.setState({
            isContentUpdating: true
        })
    }
    handleContentInputChange = (e)=>{
        this.setState({
            contentInput: e.target.value
        })
    }
    handleContentInputBlur = (e)=>{
        var id = this.props.id
    var data = {
        content:this.state.contentInput
    }
    this.props.updateTodo(id,data)

    
    
        this.setState({
            isContentUpdating: false
        })
    }
    handlePriorityDoubleClick = (e)=>{
        this.setState({
            isPriorityUpdating: true
        })
    }
    handlePriorityInputChange = (e)=>{
        this.setState({
            priorityInput: e.target.value
        })
    }
    handlePriorityInputBlur = (e)=>{
        var id = this.props.id
    var data = {
        priority:this.state.priorityInput
    }
    this.props.updateTodo(id,data)

    this.setState({
        isPriorityUpdating: false
    })
    }  
    handleRemoveButtonClick = (e)=>{
        var id = this.props.id
        this.props.removeTodo(id)
    }

    render(){
        return(
            <div className="line">
                <div className="note">
                    
                    <div className="note-content" onDoubleClick={this.handleContentDoubleClick}>
                        <i className="fas fa-minus-circle" onClick={this.handleRemoveButtonClick}></i>
                        {
                            this.state.isContentUpdating==true ? (
                            <input type="text" className="form-control" id="note-input" value ={this.state.contentInput} onBlur={this.handleContentInputBlur} onChange={this.handleContentInputChange}/>
                            ) : this.props.content
                        }
                    </div>
                    
                    <div className="note-priority" onDoubleClick={this.handlePriorityDoubleClick}>
                        {
                            this.state.isPriorityUpdating==true ? (
                            <input type="text" className="form-control" id="priority-input" value ={this.state.priorityInput} onBlur={this.handlePriorityInputBlur} onChange={this.handlePriorityInputChange}/>
                            ) : this.props.priority
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo;