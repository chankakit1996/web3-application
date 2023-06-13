import { ActionContext, ActionPayload } from 'vuex';

interface State {}

const state: State = {};

export const sample = {
    namespaced: true,
    state: state,
    getters: {},
    mutations: {
        set(state: State, payload: any) {
            const keys = Object.keys(payload);
            const stateKeys = Object.keys(state);
            keys.map((key, index) => {
                if (!stateKeys.includes(key)) {
                    console.error('payload is not part of state');
                }
            });
            Object.assign(state, payload);
        },
    },
    actions: {
        set(context: ActionContext<any, any>, payload: any) {
            context.commit('set', payload);
        },
        sample(context: ActionContext<any, any>, payload: any) {
            const sample = () => {
                console.log('sample actions');
            };
            context.dispatch('loading/load', sample, { root: true });
        },
    },
};
