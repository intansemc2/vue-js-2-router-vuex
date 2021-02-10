<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center display-4">The Super Quiz</div>
            </div>
        </div>

        <hr />

        <div class="row">
            <div class="col-12">
                <transition name="flip" mode="out-in">
                    <component
                        :is="mode"
                        @answered="answered($event)"
                        @next="mode = 'appQuestion'"
                    ></component>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import "./libraries/boostrap.css.vue";
import swal from "sweetalert";

import Question from "./components/Question.vue";
import Answer from "./components/Answer.vue";

export default {
    data() {
        return {
            mode: "appQuestion",
        };
    },
    methods: {
        answered(isCorrect) {
            if (isCorrect) this.mode = "appAnswer";
            else {
                this.mode = "appQuestion";
                swal("No No 😂", "It's Wrong! Try again!", "error");
            }
        },
    },
    components: {
        appQuestion: Question,
        appAnswer: Answer,
    },
};
</script>

<style>
.flip-enter {
    transform: rotateY(90deg);
}
.flip-enter-active {
    animation: flip-in 0.5s ease-out forwards;
}
.flip-leave {
    transform: rotateY(0deg);
}
.flip-leave-active {
    animation: flip-out 0.5s ease-out forwards;
}

@keyframes flip-out {
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(90deg);
    }
}

@keyframes flip-in {
    from {
        transform: rotateY(90deg);
    }
    to {
        transform: rotateY(0deg);
    }
}
</style>
