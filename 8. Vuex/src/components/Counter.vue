<template>
    <div>
        <button class="btn btn-primary m-1" @click="increment">Increase</button>
        <button class="btn btn-secondary m-1" @click="decrement">
            Decrease
        </button>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    methods: {
        ...mapActions(["increment", "decrement"]),
    },
};
</script>

<style scoped>
</style>