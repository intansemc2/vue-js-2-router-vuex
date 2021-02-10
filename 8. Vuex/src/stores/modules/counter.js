const state = { counter: 0 };

const getters = {
    counter: (state) => {
        return state.counter;
    },
    doubleCounter: (state) => {
        return state.counter * 2;
    },
    stringCounter: (state) => {
        return `${state.counter} clicks`;
    },
};

const mutations = {
    increment: (state, payload) => {
        state.counter += 1;
    },
    decrement: (state, payload) => {
        state.counter -= 1;
    },
    update: (state, payload) => {
        state.counter = payload;
    },
};

const actions = {
    increment: (context, payload) => {
        context.commit('increment', payload);
    },
    decrement: (context, payload) => {
        context.commit('decrement', payload);
    },
    update: (context, payload) => {
        context.commit('update', payload);
    },
};

export default {
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions,
};
