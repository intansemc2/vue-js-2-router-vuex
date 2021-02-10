<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="display-4">Vuex</div>
            </div>
        </div>

        <hr />

        <div class="row">
            <div class="col-12">
                <app-result></app-result>
                <app-another-result></app-another-result>
                <app-counter></app-counter>
            </div>
        </div>

        <hr />

        <div class="row">
            <div class="col-12">
                Input counter:
                <input type="number" step="1" value="0" v-model="counter" />
                <br />
                Current counter is {{ counter }}
            </div>
        </div>
    </div>
</template>

<script>
import "./libraries/boostrap.css.vue";
import swal from "sweetalert";

import Counter from "./components/Counter.vue";
import Result from "./components/Result.vue";
import AnotherResult from "./components/AnotherResult.vue";

export default {
    components: {
        appCounter: Counter,
        appResult: Result,
        appAnotherResult: AnotherResult,
    },
    computed: {
        counter: {
            get() {
                return this.$store.getters.counter;
            },
            set(value) {
                this.$store.dispatch("update", value);
            },
        },
    },
};
</script>

<style>
</style>
