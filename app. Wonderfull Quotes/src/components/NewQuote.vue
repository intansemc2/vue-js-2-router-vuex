<template>
    <form class="row flex-column w-100 m-1">
        <label class="display-4" for="quote">Quote</label>
        <div class="my-3">
            <textarea
                class="form-control w-100"
                id="quote"
                rows="10"
                v-model="quote"
            ></textarea>
        </div>
        <div class="my-3">
            <button class="btn btn-primary" @click.prevent="createNewQuote">
                Add quote
            </button>
        </div>
    </form>
</template>

<script>
export default {
    data: function () {
        return {
            quote: "",
        };
    },
    methods: {
        createNewQuote: function () {
            if (this.quote != "") {
                this.$emit("quoteAdded", this.quote);
                this.quote = "";
            }
        },
    },
};
</script>

<style scoped>
</style>