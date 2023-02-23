import React from "react"
import {useRef} from "react"
import { useDispatch  } from "react-redux"
import "./TodoForm.css"

const TodoForm = () => {

    const dispatch = useDispatch()
    const todoRef = useRef()

    const addTodo = () => {
        dispatch({type : "ADD_TODO", payload: {todo: todoRef.current.value}});
        todoRef.current.value = ""
    }

    return (
        <div id="Todo-Container">
        <h1>Todo List</h1>
        <div id="todo-flex">
        <input type="text" ref={todoRef} id="todo-input"></input>
        <button onClick={addTodo} type="submit" id="submit">add</button>
        </div>
        </div>
    )
}

export default TodoForm