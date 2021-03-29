<template lang="pug">
    .container
        router-view
</template>

<script>
import Todo from "@/components/Todo";
export default {
    name: "App",
    components: { Todo },
};
</script>

<style lang="scss">
body {
    font-family: "Helvetica Neue", Helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.42;
    -webkit-font-smoothing: antialiased;
    font-weight: 300;
    background: #f5f5f5;
}
.container {
    width: 600px;
    margin: 0 auto;
}
ul {
    margin: 0;
    padding: 0;
    li {
        list-style: none;
    }
}
* {
    box-sizing: border-box;
}
</style>
