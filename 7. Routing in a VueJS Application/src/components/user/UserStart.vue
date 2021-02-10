<template>
    <div>
        <h3>User Start</h3>
        <hr />
        <p>Please select a user:</p>
        <ul class="list-group">
            <router-link tag="li" to="/user/1" class="list-group-item"
                >User 1</router-link
            >
            <router-link tag="li" to="/user/2" class="list-group-item"
                >User 2</router-link
            >
            <router-link tag="li" to="/user/3" class="list-group-item"
                >User 3</router-link
            >
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.list-group-item {
    cursor: pointer;
}
</style>