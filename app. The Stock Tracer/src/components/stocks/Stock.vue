<template>
    <div class="col-xs-12 col-md-4 p-0">
        <div class="card border border-success my-1 mx-xs-0 mx-md-1">
            <div class="card-header bg-success text-white">
                <div class="card-title m-0">
                    {{ stock.name }}
                    <span class="card-text small"
                        >(Price: {{ stock.price | currency }})</span
                    >
                </div>
            </div>
            <div class="card-body row">
                <div class="col">
                    <input
                        type="number"
                        class="form-control"
                        placeholder="Quantity"
                        step="1"
                        min="0"
                        v-model="quantity"
                    />
                </div>
                <div class="">
                    <button
                        class="btn btn-success"
                        @click="checkBuyStock()"
                        :disabled="
                            quantity <= 0 ||
                            !Number.isInteger(parseInt(quantity))
                        "
                    >
                        Buy
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import swal from "sweetalert";

export default {
    props: {
        stock: Object,
    },
    data() {
        return {
            quantity: 0,
        };
    },
    computed: {
        funds() {
            return this.$store.getters.funds;
        },
        insufficientFunds() {
            return parseInt(this.quantity) * this.stock.price > this.funds;
        },
    },
    methods: {
        checkBuyStock() {
            if (this.insufficientFunds) {
                this.quantity = Math.floor(this.funds / this.stock.price);
                swal({
                    title: "Insufficient Funds",
                    text:
                        "You do not have enough money. Do you want to buy maximum stock avaiable?",
                    icon: "warning",
                    buttons: [
                        { visible: true, text: "Yes", value: true },
                        { visible: true, text: "No", value: false },
                    ],
                }).then((result) => {
                    if (result) this.buyStock();
                });
            } else this.buyStock();
        },
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: parseInt(this.quantity),
            };

            this.$store.dispatch("buyStock", order);
            this.quantity = 0;
        },
    },
};
</script>