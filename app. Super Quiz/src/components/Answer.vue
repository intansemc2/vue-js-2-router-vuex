<template>
    <div class="alert alert-success text-center">
        <h1>That's Correct! 👍</h1>
        <hr />
        <button class="btn btn-info" @click="onNextQuestion()">
            Next Question
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        onNextQuestion() {
            this.$emit("next");
        },
    },
};
</script>

<style scoped>
h1 {
    font-weight: lighter;
}
</style>