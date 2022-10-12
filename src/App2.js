import { useState } from 'react'
import Header from "./components/Header";
import List from "./components/List"
import AddTodo from "./components/AddTodo"

function App2() {

    // useState(initialState) when called is giving me back an array of two elements
    //elem 0 is the state and elem 1 is the function to update the state
    //elem 1, the function updating the state is taking the new state


    const [state, updateState] = useState([{ //useState is a react function returning an array with 2 indexes
        id: 1,
        item: "Drink Water",
        input: false,
        important: false
      },
      {
        id: 2,
        item: "Make Healthy Dinner",
        input: false,
        important: true
      },
      {
        id: 3,
        item: "Exercise",
        input: false,
        important: false
      },
    
    ])

    // let state = array[0]
    //let updateState = array[1]


  const toggleInput = (todo) => {
    let newTodo = {...todo, input:!todo.input}
    let newState = state.map(t => todo.id === t.id ? newTodo : t)

    updateState(newState)
  }

  const toggleImportant = (todo) => {
    let newTodo = {...todo, important:!todo.important}
    let newState = state.map(t => todo.id === t.id ? newTodo : t)

    updateState(newState)
  }

  const addTodo = (todo) => {
    const id = Math.ceil(Math.random() * 100000)
    const newTodo = { id, ...todo }
    //console.log(newTodo)
    const newState = [...state, newTodo]
    updateState(newState)
  }

  const deleteTodo = (todo) => {
    const id = todo.id

    const newState = [...state].filter(task => task.id !== id)
    updateState(newState)
  }

  const editTodo = (todo, inputText) => {
    const id = todo.id
    let item = inputText
    //console.log(item);
    let newTodo = {...todo, item:item}

    const newState = [...state].map(task => (task.id === id) ? newTodo : task)
    updateState(newState)
  }

    

    return(<div className="container">
      <Header title="Todo List" />
      <AddTodo onAdd={addTodo} />
      <List todos={state} deleteTodo={deleteTodo} editTodo={editTodo} toggleInput={toggleInput} toggleImportant={toggleImportant} />
    </div>)
}

export default App2;