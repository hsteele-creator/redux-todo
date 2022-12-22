const INITIAL_STATE = []

const rootReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case("ADD_TODO"):
            return [...state, {todo : action.payload.todo}]
        case("REMOVE_TODO"):
            return state.filter((todo, i) => i != action.payload.index);
        case("FINISHED_TODO") :
            return state.map((todo, i) => action.payload.index === i ? todo.finished = true : todo)
        default:
            return state
    }
}

export default rootReducer