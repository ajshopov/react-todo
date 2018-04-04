import React from 'react'

export default class ToDo extends React.Component{
  constructor(props){
    super(props)
    this.addNewItem = this.addNewItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.state = {
      todos: props.todos || [],
      addNewToDo: ""
    }
  }

  addNewItem(){ // bind.this so this.state refers to ToDo class, not the button
    if (this.state.addNewToDo.trim().length > 0) {
      const newToDos = this.state.todos.concat(this.state.addNewToDo)
      this.setState({todos: newToDos, addNewToDo: ""})
    }
  }

  removeItem(){
    const newToDos = todos.filter((todo, index) => index != i)
    this.setState({todos: newToDos})
  }

  render(){
    const todos = this.state.todos



    return(
      <div>
        <h1>My {this.props.listName} List</h1>
        {
        //   todos.length > 0 ? todos.map((item, index) => <p key={index}> {item} </p>) : `No ${this.props.listName} items`
        }
        {todos.length > 0 ? todos.map((todo, i) => (
          <p key={i} onClick={() => {
            const newToDos = todos.filter((todo, index) => index != i)
            this.setState({todos: newToDos})
          }}>
            {todo}
          </p>
        )) : <p>No {this.props.listName} items</p>}
        

        <input 
          type="text"
          value={this.state.addNewToDo}
          onChange={(event) => {
            this.setState({addNewToDo: event.target.value}) 
            // console.log(event.target.value)
          }}
        />

        <button onClick={this.addNewItem}>
          Add
        </button>
      </div>
    )
  }
}