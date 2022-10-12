import { useState } from 'react'

const AddTodo = ({ onAdd }) => { 
    const [item, setItem] = useState('')

    const onSubmit = (e) => {
        e.preventDefault() //preventing a refresh
        console.log(item)
        onAdd({item: item, input: true, important: true})

        setItem('')
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Add Todo:</label>
            <input 
                type="text" 
                placeholder="Todo Item"
                value={item}
                onChange={ (e) => setItem(e.target.value)}
            /> 
            <input type="submit" value="Add Todo" />
        </form>
    )
}

export default AddTodo
