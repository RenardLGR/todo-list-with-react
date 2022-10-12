import { useState } from 'react'

const Edit = ({todo, editTodo}) => {

    const [state, updateState] = useState(todo.item)
    //console.log(state)



    return (
        <div>
            <input type="text" value={state} onChange={(e) => updateState(e.target.value)} />
            <span onClick={()=>editTodo(todo, state)}>Save</span>
        </div>
    )
}

export default Edit