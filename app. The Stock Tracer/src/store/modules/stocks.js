import { stocks } from '../../data/stocks.js';

const state = {
    stocks: [],
};

const mutations = {
    setStocks(state, stocks) {
        state.stocks = stocks;
    },
    randomStocks(state) {
        state.stocks.forEach((stock) => {
            stock.price = Math.floor(stock.price * (Math.random() + 0.5));

            if (stock.price < 1) stock.price = 1;
        });
    },
};

const actions = {
    buyStock(context, order) {
        context.commit('buyStock', order);
    },
    initStocks(context) {
        context.commit('setStocks', stocks);
    },
    randomStocks(context) {
        context.commit('randomStocks');
    },
};

const getters = {
    stocks(state) {
        return state.stocks;
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
