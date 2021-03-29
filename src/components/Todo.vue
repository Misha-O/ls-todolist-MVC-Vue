<template lang="pug">
    div
        ul.readme__list
            li.readme__item This is a CRUD todo-list based on TodoMVC application refactored for Vue js
            li.readme__item To add type new todo and press 'enter'
            li.readme__item to edit 'double click' on chosen todo
            li.readme__item to remove use 'x'
            li.readme__item list items can be toggled 'completed'
            li.readme__item list items can be filtered based on complition

        div.todo
            TodoInput(
                )
            TodoList(
                :todos="filteredTodos"
                :checkedAll="checkedAll"
                v-show="todos.length > 0"
                )
</template>

<script>
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import { mapState } from "vuex";

export default {
    components: {
        TodoInput,
        TodoList,
    },
    computed: {
        ...mapState({
            todos: state => state.todos.todos,
            filter: state => state.todos.filter,
            checkedAll: state => state.todos.checkedAll,
        }),
        filteredTodos() {
            switch (this.filter) {
                case "all":
                    return this.todos;
                case "active":
                    return this.todos.filter(item => item.checked === false);
                case "completed":
                    return this.todos.filter(item => item.checked);
                default:
                    break;
            }
            return [];
        },
    },
};
</script>

<style lang="scss" scoped>
.todo {
    margin-top: 100px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
.readme__list {
    margin-top: 50px;
    color: rgba(0, 0, 0, 0.5);
}
.readme__item {
    list-style: disc;
}
</style>
