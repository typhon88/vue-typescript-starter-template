import { MutationTree } from 'vuex';
import { MainState } from '@/store/types';
import Vue from 'vue';

const mutations: MutationTree<MainState> = {
    setRoutePermissions(state, payload: any) {
        Vue.set(state, 'RoutePermissions', payload);
	}
}

export default mutations;