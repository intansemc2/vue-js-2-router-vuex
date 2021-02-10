<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>
            I'm an awesome User! My name is {{ name }}
            <button @click="changeName">Change my name</button>
        </p>
        <p>My age is {{ age }}</p>
        <hr />
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                    :name="name"
                    :age="age"
                    @resetName="name = $event"
                ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                    :age="age"
                    @changeAge="age = $event"
                ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
    data: function () {
        return {
            name: "Max",
            age: 21,
        };
    },
    methods: {
        changeName: function () {
            this.name = `Random Name ${Math.floor(
                Math.random() * 8999 + 1000
            ).toString(16)}`;
        },
    },
    components: {
        appUserDetail: UserDetail,
        appUserEdit: UserEdit,
    },
};
</script>

<style scoped>
div {
    background-color: lightblue;
}
</style>
