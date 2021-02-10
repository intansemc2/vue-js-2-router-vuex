<template>
    <div class="quote">
        <div class="title">
            <slot name="title"></slot>
            <p class="small subtitle" name="subtitle">The subtitle</p>
        </div>
        <hr />
        <div>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
div.quote {
    margin: 50px auto;
    padding: 50px;

    text-align: center;

    border: 1px solid black;
    box-shadow: 1px 1px 2px black;
}
.title {
    color: red;
    font-style: italic;
}
.subtitle {
    color: gray;
}
</style>