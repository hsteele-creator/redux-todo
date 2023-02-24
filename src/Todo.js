import React from "react"
import { useSelector, useDispatch } from "react-redux"
import "./Todo.css"
import Trashcan from "./trash-can.png"

const Todo = ({index}) => {

    const todo = useSelector(store => store[index].todo);
    // const index = getTodo(index)
    const finished = useSelector(store => store[index].finished);

    const dispatch = useDispatch()

    const removeTodo = () => {
        dispatch({type: "REMOVE_TODO", payload: {index}})
    }

    const finishedTodo = () => {
        dispatch({type: "FINISHED_TODO", payload: {index}})
    }

    const updateActiveId = () => {
        dispatch({type: "UPDATE_ID", payload: {index}})
    }

    return (
    <div id="todo">
    <li id="todo-item" className={finished === true ? "finished" : ""} onClick={updateActiveId}>{todo}</li>
    <div id="buttons">
    <button id="remove" onClick={removeTodo}>
        <img id="trashcan" src={Trashcan} />
    </button>
    <input type="checkbox" id="finished" onClick={finishedTodo}></input>
    </div>
    </div>
    )
}

export default Todo