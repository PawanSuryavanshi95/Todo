const initState = {
    todos: [
        {id:1, task:"Task 1 is here"},
        {id:2, task:"Task 2 lorem ispsum"},
        {id:3, task:"Task 3 to do, last task"},
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