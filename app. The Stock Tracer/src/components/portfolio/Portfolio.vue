<template>
    <div>
        <div class="row m-0">
            <app-stock
                v-for="stock in stocks"
                v-bind:key="stock.id"
                :stock="stock"
            ></app-stock>
        </div>
    </div>
</template>

<script>
import Stock from "./Stock.vue";

export default {
    computed: {
        stocks() {
            return this.$store.getters.stocksPortfolio;
        },
    },
    components: {
        appStock: Stock,
    },
};
</script>