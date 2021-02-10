<template>
    <div>
        <h2>User</h2>
        <hr />
        <button class="btn btn-info" @click="navToHome()">Nav to home</button>
        <hr />
        <router-view></router-view>
        <br />
    </div>
</template>

<script>
export default {
    methods: {
        navToHome() {
            this.$router.push({ name: "Home" });
        },
    },
};
</script>

<style scoped>
</style>