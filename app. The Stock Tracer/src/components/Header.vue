<template>
    <nav class="navbar navbar-light border my-3 p-3 container-fluid">
        <div class="row w-100 m-0">
            <div class="navbar-header">
                <router-link class="navbar-brand" to="/"
                    >Stock Trader</router-link
                >
            </div>

            <div class="navbar-nav">
                <router-link
                    class="nav-link mx-1"
                    to="/"
                    active-class="active"
                    exact
                    >Home</router-link
                >
                <router-link
                    class="nav-link mx-1"
                    to="/portfolio"
                    active-class="active"
                    >Portfolio</router-link
                >
                <router-link
                    class="nav-link mx-1"
                    to="/stocks"
                    active-class="active"
                    >Stocks</router-link
                >
            </div>

            <div class="col"></div>

            <div class="navbar-nav">
                <a class="nav-link mx-1" @click="endDay()"> End day </a>

                <div class="dropdown" :class="{ show: isSaveLoadOpen }">
                    <a
                        id="saveAndLoad"
                        class="nav-link dropdown-toggle mx-1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        :aria-expanded="isSaveLoadOpen"
                        @click="isSaveLoadOpen = !isSaveLoadOpen"
                    >
                        Save &amp; loads
                    </a>
                    <ul
                        class="dropdown-menu"
                        aria-labelledby="saveAndLoad"
                        :class="{ show: isSaveLoadOpen }"
                    >
                        <a type="button" class="dropdown-item"> Save </a>
                        <a type="button" class="dropdown-item"> Load </a>
                    </ul>
                </div>

                <strong class="nav-link mx-1"
                    >Funds: {{ funds | currency }}</strong
                >
            </div>
        </div>
    </nav>
</template>

<script>
import swal from "sweetalert";
export default {
    data() {
        return {
            isSaveLoadOpen: false,
        };
    },
    computed: {
        funds() {
            return this.$store.getters.funds;
        },
    },
    methods: {
        endDay() {
            swal({ title: "End a Day!", icon: "info", timer: 1000 }).then(
                () => {
                    console.log("Start a new Day!");
                    this.$store.dispatch("randomStocks");
                }
            );
        },
    },
};
</script>

<style scoped>
.navbar-nav {
    flex-direction: row;
}
.nav-link {
    user-select: none;
    cursor: pointer;
}
.dropdown-menu {
    position: absolute;
}
</style>
