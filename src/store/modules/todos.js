const todos = {
    state: {
        todos: [],
        filter: "all",
        checkedAll: false,
        editMode: false,
    },
    mutations: {
        addTodo(state, todo) {
            state.todos.push(todo);
        },
        removeTodo(state, id) {
            state.todos = state.todos.filter(todo => todo.id !== id);
        },
        checkTodo(state, todo) {
            state.todos = state.todos.map(item => (item.id === todo.id ? todo : item));
        },
        filterTodos(state, filter) {
            state.filter = filter;
        },
        toggleAll(state) {
            state.todos.forEach(todo => {
                todo.checked = !todo.checked;
            });
            state.checkedAll = !state.checkedAll;
        },
        clearAll(state) {
            state.todos = state.todos.filter(todo => todo.checked === false);
        },
        updateTodo(state) {
            state.editMode = false;
        },
        changeEditMode(state) {
            state.editMode = true;
        },
    },
    actions: {},
    getters: {},
};

export default todos;
