<template>
    <div>
        <p>The another result is {{ doubleCounter }}</p>
        <p>Number of clicks is {{ stringCounter }}</p>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters(["doubleCounter", "stringCounter"]),
    },
};
</script>

<style scoped>
p {
    font-size: 2rem;
    font-weight: lighter;
}
</style>