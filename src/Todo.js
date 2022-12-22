import React from "react"
import { useSelector, useDispatch } from "react-redux"
import "./Todo.css"

const Todo = ({index}) => {

    const todo = useSelector(store => store[index].todo);
    const dispatch = useDispatch()

    const removeTodo = () => {
        dispatch({type: "REMOVE_TODO", payload: {index: index}})
    }

    const finishedTodo = () => {

    }

    return (
    <div id="todo">
    <li id="todo-item">{todo}</li>
    <p id="remove" onClick={removeTodo}>🗑️</p>
    <p id="finished" onClick={removeTodo}>✔️</p>
    </div>
    )
}

export default Todo