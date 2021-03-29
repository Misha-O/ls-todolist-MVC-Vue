<template lang="pug"> 
    .todo-input
        div.error {{validation.firstError('todo.name')}}
        label(
            @click="toggleAllTodos"
        ).toggle-all
        input(
            type="text" placeholder="Todo name" autofocus
            :class="{'valid-error': validation.hasError('todo.name')}"
            v-model="todo.name"
            @keydown.enter="addNewTodo"
        ).input

</template>

<script>
import { Validator } from "simple-vue-validator";
import { mapMutations } from "vuex";

function uniqId() {
    return Math.floor(Math.random() * (1000 - 1 + 1) + 1);
}
export default {
    mixins: [require("simple-vue-validator").mixin],
    validators: {
        "todo.name"(value) {
            return Validator.value(value).required("Input can not be empty");
        },
    },
    data() {
        return {
            todo: {
                id: 0,
                name: "",
                checked: false,
            },
        };
    },
    methods: {
        ...mapMutations(["addTodo", "toggleAll"]),
        addNewTodo() {
            this.$validate().then(success => {
                if (!success) return;
                this.todo.id = uniqId();
                this.addTodo({ ...this.todo });
                this.todo.name = "";
                this.validation.reset();
            });
        },
        toggleAllTodos() {
            this.toggleAll();
        },
    },
};
</script>

<style lang="scss" scoped>
.todo-input {
    display: flex;
    align-items: center;
    position: relative;
}
.toggle-all {
    position: absolute;
    width: 60px;
    height: 34px;
    font-size: 0;
    position: absolute;
    top: 20%;
    left: 0%;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    &::before {
        content: "❯";
        font-size: 22px;
        color: #e6e6e6;
        padding: 10px 27px 10px 27px;
    }
}
.input {
    font-size: 24px;
    padding: 16px 16px 16px 60px;
    border: 1px solid transparent;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    line-height: 1.4em;
    outline: none;
    color: inherit;
    width: 100%;
    background: #fff;
}
.valid-error {
    border: 1px solid firebrick;
}
.error {
    position: absolute;
    top: -30px;
    left: 0;
    color: firebrick;
}
</style>
