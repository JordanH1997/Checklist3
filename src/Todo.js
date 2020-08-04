import React, { Component } from 'react';
import './App.css';

class Todo extends Component{

    constructor(props){
        super(props)
    }

    handleRemoveButtonClick = (e)=>{
        var id = this.props.id
        this.props.removeTodo(id)
    }

    render(){
        return(
            <div className="line">
                <div className="note">
                <i className="fas fa-minus-circle" onClick={this.handleRemoveButtonClick}></i>
                {this.props.content} - {this.props.priority}
                </div>
            </div>
        )
    }
}

export default Todo;