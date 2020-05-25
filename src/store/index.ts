import Vue from 'vue';
import Vuex, { StoreOptions, Store } from "vuex";
import createPersistedState from "vuex-persistedstate";

import { RootState } from './types';
import Main from './MainModule';
import { loadingScreenPlugin } from './plugins';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {
        version: '1.0.0',
    },
    modules: {
		Main
    },
    plugins: [ loadingScreenPlugin, createPersistedState({ key: 'your-key-name-here-1.0.0'}), ] //add versioning to avoid issues
};

export default new Store<RootState>(store);