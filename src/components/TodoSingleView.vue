<template lang="pug">
    div
        h1 Single component
        button(
            @click="goBack"
        ) Go back
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.push({ name: "Todo" });
        },
    },
};
</script>

<style></style>
