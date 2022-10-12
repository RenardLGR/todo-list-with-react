
const Todo = ({ todo }) => {
    return (
        <div>
            <h2 style={{backgroundColor: todo.important===true ? 'red' : 'white'}}>{todo.item}</h2>
        </div>
    )
}

export default Todo

