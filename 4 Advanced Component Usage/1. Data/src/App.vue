<template>
    <div class="container">
        <br />

        <button class="btn btn-primary" @click="selectedComponent = 'appQuote'">
            Select app Quote
        </button>

        <button class="btn btn-secondary" @click="selectedComponent = 'appNew'">
            Select app Quote
        </button>

        <button class="btn btn-info" @click="selectedComponent = 'appAuthor'">
            Select app Quote
        </button>

        <br />

        <keep-alive>
            <component :is="selectedComponent">
                <h2 slot="title">{{ quoteTitle }}</h2>
                <p slot="content">A wonder full quote!</p>
            </component>
        </keep-alive>

        <!-- <app-quote>
            <h2 slot="title">{{ quoteTitle }}</h2>
            <p slot="content">A wonder full quote!</p>
        </app-quote> -->
    </div>
</template>

<script>
import "./components/StyleBoostrap.vue";

import Quote from "./components/Quote.vue";
import New from "./components/New.vue";
import Author from "./components/Author.vue";

export default {
    data: function () {
        return {
            selectedComponent: "appQuote",
            quoteTitle: "The Quote Title",
        };
    },
    components: {
        appQuote: Quote,
        appNew: New,
        appAuthor: Author,
    },
};
</script>

<style>
</style>
