import React from "react"
import { useSelector } from "react-redux"
import TodoForm from "./TodoForm";
import Todo from "./Todo"

const TodoList = () => {
    const todos = useSelector(store => store);

   return (<>
     <TodoForm />
    <ul>
        {todos.map((todo, i) => {
            return <Todo index={i}/>
        })}
    </ul>
    </>)
}

export default TodoList
