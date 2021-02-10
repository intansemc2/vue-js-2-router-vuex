<template>
    <div class="container">
        <button class="btn btn-info" @click="swalTest">Swal test</button>
    </div>
</template>

<script>
import "./libraries/boostrap.css.vue";
import swal from "sweetalert";

export default {
    methods: {
        swalTest: function () {
            swal("Sweet Alert success", "", "success");
        },
    },
};
</script>

<style>
</style>
