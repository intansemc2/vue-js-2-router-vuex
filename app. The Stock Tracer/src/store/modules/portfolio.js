const state = {
    funds: 10000,
    stocks: [],
};

const mutations = {
    buyStock(state, order) {
        const record = state.stocks.find((el) => el.id == order.stockId);
        if (record) record.quantity += order.quantity;
        else
            state.stocks.push({
                id: order.stockId,
                quantity: order.quantity,
            });
        state.funds -= order.stockPrice * order.quantity;
    },
    sellStock(state, order) {
        const record = state.stocks.find((el) => el.id == order.stockId);
        if (record) {
            if (record.quantity > order.quantity) record.quantity -= order.quantity;
            else state.stocks.splice(state.stocks.indexOf(record), 1);

            state.funds += order.stockPrice * order.quantity;
        }
    },
};

const actions = {
    sellStock(context, order) {
        context.commit('sellStock', order);
    },
};

const getters = {
    stocksPortfolio(state, otherGetters) {
        return state.stocks.map((stock) => {
            const record = otherGetters.stocks.find((el) => el.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price,
            };
        });
    },
    funds(state) {
        return state.funds;
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
