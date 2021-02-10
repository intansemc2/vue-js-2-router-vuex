<template>
    <div>
        <p>The result is {{ counter }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        counter() {
            return this.$store.getters.doubleCounter;
        },
    },
};
</script>

<style scoped>
p {
    font-size: 2rem;
    font-weight: lighter;
}
</style>