<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>
            User Name is {{ name }}, user name reversed is {{ reverseName() }}
            <button @click="resetName">Reset name</button>
        </p>
        <p>User Age is {{ age }}</p>
    </div>
</template>

<script>
import { eventBus } from "../main";

export default {
    props: {
        name: String,
        age: Number,
    },
    methods: {
        reverseName: function () {
            return this.name.split("").reverse().join("");
        },
        resetName: function () {
            this.name = "Max";
            this.$emit("resetName", this.name);
        },
    },
    created: function () {
        eventBus.$on("changeAge", (newAge) => {
            this.age = newAge;
        });
    },
};
</script>

<style scoped>
p {
    user-select: none;
}
div {
    background-color: lightcoral;
}
</style>
