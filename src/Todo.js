import React from "react"
import { useSelector, useDispatch } from "react-redux"

const Todo = ({index}) => {

    const todo = useSelector(store => store[index].todo);
    const dispatch = useDispatch()

    const removeTodo = () => {
        dispatch({type: "REMOVE_TODO", payload: {index: index}})
    }

    return (
    <div>
    <li>{todo}</li>
    <button onClick={removeTodo}>remove</button>
    </div>
    )
}

export default Todo