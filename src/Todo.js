import React from "react"
import { useSelector, useDispatch } from "react-redux"
import "./Todo.css"

const Todo = ({index}) => {

    const todo = useSelector(store => store[index].todo);
    const finished = useSelector(store => store[index].finished)
    const dispatch = useDispatch()

    const removeTodo = () => {
        dispatch({type: "REMOVE_TODO", payload: {index: index}})
    }

    const finishedTodo = () => {
        dispatch({type: "FINISHED_TODO", payload: {index: index}})
    }

    return (
    <div id="todo">
    <li id="todo-item" className={finished === true ? "finished" : ""}>{todo}</li>
    <p id="remove" onClick={removeTodo}>🗑️</p>
    <p id="finished" onClick={finishedTodo}>✔️</p>
    </div>
    )
}

export default Todo