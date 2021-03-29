<template lang="pug">
    div
        button(
            v-for="filter in filters" :key="filter"
            type="button"
            @click="filterCurrentTodos(filter)"
            :class="{active: currentFilter === filter}"
            ) {{filter}}
        button(
            type="button"
            v-show="checkedAll"
            @click="clearAllTodos"
        ) Clear all
</template>

<script>
import { mapMutations } from "vuex";

export default {
    props: {
        checkedAll: {
            type: Boolean,
        },
    },
    data() {
        return {
            filters: ["all", "active", "completed"],
            currentFilter: "all",
        };
    },
    methods: {
        ...mapMutations(["filterTodos", "clearAll"]),
        filterCurrentTodos(filter) {
            this.currentFilter = filter;
            this.filterTodos(filter);
        },
        clearAllTodos() {
            this.clearAll();
        },
    },
};
</script>

<style lang="scss" scoped>
button {
    margin-right: 20px;
    border: none;
    background: transparent;
    font-weight: 300;
    color: inherit;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 3px;
    outline: none;
    &.active {
        border-color: rgba(175, 47, 47, 0.2);
    }
    &:last-child {
        margin-right: 0;
    }
}
</style>
