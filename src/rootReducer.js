const INITIAL_STATE = []

const rootReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case("ADD_TODO"):
            return [...state, {todo : action.payload.todo}]
        case("REMOVE_TODO"):
            return state.filter((todo, i) => i != action.payload.index);
        case("FINISHED_TODO") :
            return state.map((todo, i) => {
                if(i === action.payload.index) {
                    if(todo.finished === true) {
                        return {...todo, finished : false}
                    } else {
                        return {...todo, finished : true}
                    }
                } else {
                    return todo
                }
            })
        default:
            return state
    }
}

export default rootReducer