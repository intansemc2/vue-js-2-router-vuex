<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>Routing</h1>
                <hr />

                <router-view name="header-top"></router-view>

                <transition name="slide" mode="out-in">
                    <router-view></router-view>
                </transition>

                <router-view name="header-bottom"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import "./libraries/boostrap.css.vue";
import swal from "sweetalert";

import Header from "./components/Header.vue";

export default {
    components: {
        appHeader: Header,
    },
};
</script>

<style>
.slide-leave-active {
    transition: opacity 0.25s ease;
    opacity: 0;
    animation: slide-out 0.25s ease-out forwards;
}
.slide-leave {
    opacity: 1;
    transform: translateY(0);
}
.slide-enter-active {
    animation: slide-in 0.25s ease-out forwards;
}

@keyframes slide-out {
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(-30px);
    }
}

@keyframes slide-in {
    from {
        transform: translateY(-30px);
    }
    to {
        transform: translateY(0px);
    }
}
</style>
