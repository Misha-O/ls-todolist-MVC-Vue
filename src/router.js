import Vue from "vue";
import VueRouter from "vue-router";
import Todo from "@/components/Todo";
import TodoSingleView from "@/components/TodoSingleView";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Todo",
        component: Todo,
        props: true,
    },
    {
        path: "/view/:id",
        name: "TodoSingleView",
        component: TodoSingleView,
    },
];

export default new VueRouter({ routes, mode: "history" });
