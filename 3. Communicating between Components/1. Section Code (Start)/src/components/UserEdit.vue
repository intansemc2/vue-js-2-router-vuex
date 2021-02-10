<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>
            Edit user age:
            <input
                type="number"
                step="1"
                min="0"
                :value="age"
                @change="changeAge"
            />
        </p>
    </div>
</template>

<script>
import { eventBus } from "../main";

export default {
    props: {
        age: Number,
    },
    methods: {
        changeAge: function (event) {
            this.age = parseInt(event.target.value);
            //this.$emit("changeAge", this.age);
            eventBus.$emit("changeAge", this.age);
        },
    },
};
</script>

<style scoped>
div {
    background-color: lightgreen;
}
</style>
