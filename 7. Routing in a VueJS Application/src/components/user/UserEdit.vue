<template>
    <div>
        <h1>User Edit</h1>
        <hr />
        <p>User locate: {{ $route.query.locate }}</p>
        <p>User analysic: {{ $route.query.q }}</p>

        <br />
        <button class="btn btn-primary" @click="confirmed = true">
            Confirm
        </button>
        <br /><br />
        <div
            class="text-light bg-dark d-flex justify-content-center align-items-center"
            style="height: 200vh"
        >
            Big space ...
        </div>
        <br />
        <p id="extraData">This is some extra data</p>
    </div>
</template>

<script>
import swal from "sweetalert";

export default {
    data() {
        return {
            confirmed: false,
        };
    },
    beforeRouteLeave(to, from, next) {
        if (this.confirmed) next();
        else {
            swal({
                title: "Leave confirm",
                text: "Do you want to leave?",
                icon: "warning",
                buttons: [
                    { text: "Yes", visible: true, value: true },
                    { text: "No", visible: true, value: false },
                ],
            }).then((isLeave) => {
                if (isLeave) next();
                else next(false);
            });
        }
    },
};
</script>

<style scoped>
</style>