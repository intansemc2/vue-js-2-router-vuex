<template>
    <div class="container">
        <app-header
            :quoteCount="quotes.length"
            :maxQuotes="maxQuotes"
        ></app-header>
        <app-new-quote @quoteAdded="addNewQuote"></app-new-quote>
        <app-quote-grid
            :quotes="quotes"
            @quoteDeleted="deleteQuote"
        ></app-quote-grid>

        <div class="row">
            <div class="col-12 text-center">
                <div class="alert alert-info">
                    Info: Click on a quote to delete it
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "./libraries/boostrap.css.vue";
import swal from "sweetalert";

import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";
import Header from "./components/Header.vue";

export default {
    data: function () {
        return {
            maxQuotes: 10,
            quotes: ["Test quote"],
        };
    },
    components: {
        appQuoteGrid: QuoteGrid,
        appNewQuote: NewQuote,
        appHeader: Header,
    },
    methods: {
        addNewQuote: function (newQuote) {
            if (this.quotes.length < this.maxQuotes) {
                if (this.quotes.includes(newQuote))
                    swal("Error", "Quote aldeady exists!", "error");
                else this.quotes.push(newQuote);
            } else {
                swal("Error", "You must delete some quote first!", "error");
            }
        },
        deleteQuote: function (index) {
            this.quotes.splice(index, 1);
        },
    },
};
</script>

<style>
</style>
