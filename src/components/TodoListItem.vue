<template lang="pug"> 
    .todo-item(
        :class="{checked: todo.checked}"
    )
        label.label
            .input-block 
                input(
                    type="checkbox"
                    @change="checkCurrentTodo"
                    :checked="todo.checked"
                ).input
            .title(
                v-if="!editMode"
                @dblclick.self="changeEditTodoMode"
            ) {{todo.name}}
            input(
                v-if="editMode"
                v-model="todo.name"
                type="text"
                @keydown.enter="updateCurrentTodo"
        ).input-edit
        //- .button 
        //-     router-link(
        //-         :to="{name: 'TodoSingleView', params: { id: todo.id }}"
        //-     )
        //-         button(
        //-             type="button"
        //-         ).view ->
        .button 
            button(
                type="button"
                @click="removeCurrentTodo"
            ).remove x
</template>

<script>
import { mapMutations } from "vuex";
import { mapState } from "vuex";

export default {
    props: {
        todo: {
            type: Object,
        },
    },
    computed: {
        ...mapState({
            editMode: state => state.todos.editMode,
        }),
    },
    methods: {
        ...mapMutations(["removeTodo", "checkTodo", "updateTodo", "changeEditMode"]),
        removeCurrentTodo() {
            this.removeTodo(this.todo.id);
        },
        checkCurrentTodo(e) {
            let todoItem = { ...this.todo, checked: e.target.checked };
            this.checkTodo(todoItem);
        },
        updateCurrentTodo() {
            this.updateTodo();
        },
        changeEditTodoMode() {
            this.changeEditMode();
        },
    },
};
</script>

<style lang="scss">
.todo-item {
    display: flex;
    align-items: center;
    &:hover {
        & .remove {
            visibility: visible;
        }
        .view {
            visibility: visible;
        }
    }
}
.checked .title {
    text-decoration: line-through;
}
.label {
    display: flex;
    align-items: center;
    flex: 1;
}
.input-block {
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.title {
    padding: 15px 0;
}
.input-edit {
    padding: 20px 5px;
    font-size: 24px;
    font-weight: 500;
    border: transparent;
    &:focus {
        outline: none;
    }
}
.button {
    width: 40px;
}
.remove {
    background: transparent;
    border: none;
    color: firebrick;
    cursor: pointer;
    font-size: 20px;
    visibility: hidden;
}
.view {
    visibility: hidden;
    cursor: pointer;
}
</style>
