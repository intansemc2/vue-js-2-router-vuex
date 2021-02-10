<template>
    <div>
        <h3>User Detail</h3>
        <hr />
        <p>Some user detail</p>
        <p>Loaded user id {{ $route.params.id }}</p>
        <router-link tag="button" :to="link" class="btn btn-info"
            >Edit info</router-link
        >
    </div>
</template>

<script>
export default {
    data() {
        return {
            link: {
                name: "userEdit",
                params: { id: this.$route.params.id },
                query: { locate: "en", q: "100" },
                hash: "#extraData",
            },
        };
    },
};
</script>

<style scoped>
</style>