import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props)

    this.state = {
      todos:  [
        {
          id: 1,
          content: 'Meat',
          priority: 'Important'
        },
        {
          id: 2,
          content: 'Fish',
          priority: 'Important'
        },
        {
          id: 3,
          content: 'Veges',
          priority: 'Important'
        }
      ],
      noteInputValue: ''
    }
    
  }

// Event Handlers
addTodo = (data)=>{
  var newTodo = {
    id: Date.now(),
    ...data
  }

  var newList = [newTodo, ...this.state.todos]
  this.setState({
    todos: newList
  })

}
removeTodo = (id)=>{
  var todos = this.state.todos

  var filtered = todos.filter((todo)=>{
    return todo.id !=id
  })

  this.setState({
    todos: filtered
  })

}
updateTodo = (id,data)=>{
  var todos = this.state.todos
    var updated = todos.map((todo)=>{
      
      return (todo.id == id) ? {...todo,...data} : todo
    
    })

    this.setState({
      todos:updated
    })
}


  render(){
    return (
      <div className="App">
        
        <header>
          <div className="bars">
            <i className="fas fa-bars"></i>
          </div>
          <div className="checklist">My Shopping List</div>
        </header>
        
        <main>
        
        <div className="notes">
          
          {
            this.state.todos.map((todo)=>{
              
              var todoProps = {
                key:todo.id,
                removeTodo: this.removeTodo,
                updateTodo: this.updateTodo,
                ...todo
              }
              return(
                
                <Todo {...todoProps}/>
              
              )
            })
          }
        
        <NewTodoForm addTodo={this.addTodo}/>

        </div>
        </main>
        
      </div>
    );
  }
  }

export default App;
