<template>
    <div class="card" v-if="answers.length > 1">
        <div class="card-header text-center">
            <b>{{ question }}</b>
        </div>

        <div class="card-body row">
            <div
                class="col-xs-12 col-sm-6 p-1 m-0 row justify-content-center"
                v-for="ans in answers"
                v-bind:key="ans"
            >
                <div class="col-sm-12 col-md-6">
                    <div
                        class="btn btn-secondary w-100"
                        @click="onAnswer(ans == answer)"
                    >
                        {{ ans }}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="card" v-else>
        <div class="card-body text-center">
            <i class="small">Nothing here yet!</i>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            question: "Nothing here yet!",
            answers: [],
            answer: 0,
            maxNumber: 100,
            numberAnswers: 4,
            maxResultChange: 5,
        };
    },
    methods: {
        createQuestionAnswers() {
            // Create answer
            let a = Math.floor(Math.random() * this.maxNumber);
            let b = Math.floor(Math.random() * this.maxNumber);
            let operator = Math.random() > 0.5 ? "+" : "-";
            this.answer = operator == "+" ? a + b : a - b;

            // Create the question
            this.question = `What is ${a} ${operator} ${b}?`;

            // Create the other answers
            this.answers = [this.answer];
            for (let i = 1; i < this.numberAnswers; i += 1) {
                let change = 0;

                let newAnswer = this.answer + change;
                while (this.answers.includes(newAnswer)) {
                    change = Math.floor(Math.random() * this.maxResultChange);
                    change *= Math.random() > 0.5 ? 1 : -1;
                    newAnswer = this.answer + change;

                    if (this.maxResultChange < this.numberAnswers) break;
                }

                this.answers.push(newAnswer);
            }

            // Mix the answers
            this.answers.forEach((ans, i) => {
                let swap = Math.floor(Math.random() * this.answers.length);
                this.answers[i] = this.answers[swap];
                this.answers[swap] = ans;
            });
        },
        onAnswer(isCorrect) {
            this.$emit("answered", isCorrect);
        },
    },
    created() {
        this.createQuestionAnswers();
    },
};
</script>

<style scoped>
</style>