<template>
    <div class="col-xs-12 col-md-4 p-0">
        <div class="card border border-info my-1 mx-xs-0 mx-md-1">
            <div class="card-header bg-info text-white">
                <div class="card-title m-0">
                    {{ stock.name }}
                    <span class="card-text small"
                        >(Price: {{ stock.price | currency }}, quantity:
                        {{ stock.quantity | quantity }})</span
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
                        class="btn btn-info"
                        @click="checkSellStock()"
                        :disabled="
                            quantity <= 0 ||
                            !Number.isInteger(parseInt(quantity))
                        "
                    >
                        Sell
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        stock: Object,
    },
    data() {
        return {
            quantity: 0,
        };
    },
    created() {
        this.quantity = this.stock.quantity;
    },
    computed: {
        insufficientQuantity() {
            return this.quantity > this.stock.quantity;
        },
    },
    methods: {
        checkSellStock() {
            if (this.insufficientQuantity) {
                this.quantity = this.stock.quantity;
                swal({
                    title: "Insufficient Quantity",
                    text:
                        "You do not have enough stock. Do you want to sell maximum stock avaiable?",
                    icon: "warning",
                    buttons: [
                        { visible: true, text: "Yes", value: true },
                        { visible: true, text: "No", value: false },
                    ],
                }).then((result) => {
                    if (result) this.sellStock();
                });
            } else this.sellStock();
        },
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: parseInt(this.quantity),
            };

            this.$store.dispatch("sellStock", order);

            this.quantity = 0;
        },
    },
};
</script>