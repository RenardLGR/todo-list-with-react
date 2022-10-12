import Todo from './Todo'
import Edit from './Edit'
import { useState } from 'react'

const List = ({ todos, deleteTodo, editTodo, toggleInput, toggleImportant }) => {


    return (
        <div>
          {todos.map((todo) => 
          <div key={todo.id}>
            <Todo todo={todo} />
            <div onClick={() => toggleInput(todo)}>Edit</div>
            {(todo.input===true) ? <Edit todo={todo} editTodo={editTodo} /> : ''}
            <div><span onClick={() => deleteTodo(todo)}>X</span></div>
            <div><span onClick={() => toggleImportant(todo)}>Important</span></div>
          </div>
          )}  
        </div>
    )
}

export default List

