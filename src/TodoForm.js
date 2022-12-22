import React from "react"
import {useRef} from "react"
import { useDispatch  } from "react-redux"

const TodoForm = () => {

    const dispatch = useDispatch()
    const todoRef = useRef()

    const addTodo = () => {
        dispatch({type : "ADD_TODO", payload: {todo: todoRef.current.value}});
        todoRef.current.value = ""
    }

    return (
        <>
        <input type="text" ref={todoRef}></input>
        <button onClick={addTodo} type="submit">Add Todo</button>
        </>
    )
}

export default TodoForm