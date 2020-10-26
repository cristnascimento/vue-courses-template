import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            counter: 0
        };
    },
    mutations: {
        increment(state, payload) {
            state.counter = state.counter + payload;
        }
    },
    getters: {
        counter(state) {
            return state.counter;
        }
    },
    actions: {
        addOne(context) {
            // an action allows asynchronous code
            setTimeout(function() {
                context.commit('increment', 1);
            }, 2000);
            
        }
    }
});