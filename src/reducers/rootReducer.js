const initState = {
    todos: [
        {id:1, task:"I need to complete this app."},
        {id:2, task:"Study for FQI quiz."},
        {id:3, task:"Study Signal and Systems."},
    ]
}

const rootReducer = (state= initState, action) => {
    if(action.type==="DELETE_TASK"){
        var newTodos = state.todos.filter(todo => {
            return(
                todo.id !== action.id
            )
        });
        state = {
            todos:newTodos,
        }
    }
    else if(action.type==="ADD_TASK"){
        state = {
            todos: [...state.todos, { id: state.todos.length + 1, task: action.task} ],
        }
    }
    return state;
}

export default rootReducer;