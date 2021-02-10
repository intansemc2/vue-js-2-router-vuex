<template>
    <div class="col-xs-12 col-md-6 col-lg-3 m-0 p-0">
        <div class="quote p-3 my-1 mx-xs-0 mx-md-1">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        quotes: Array,
    },
};
</script>

<style scoped>
.quote {
    font-family: "Noto Sans Mono", monospace;
    font-size: 24px;
    font-style: italic;
    color: #6e6e6e;
    cursor: pointer;
    border: 1px solid #1a1a1a;
}

.quote:hover {
    background-color: #ffe2e2;
}
</style>