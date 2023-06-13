import { createStore } from 'vuex';
import { loading } from './loading';
import { sample } from './sample';

export const store = createStore({
    modules: {
        sample,
        loading,
    },
});
