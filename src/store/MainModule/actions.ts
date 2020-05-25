import { ActionTree } from 'vuex';
import { MainState, RootState } from "@/store/types";

const actions: ActionTree<MainState, RootState> = {
    getRoutePermissions({ commit, state }) : void {
        // get data here
        const dummyData = {};
        //then commit
        console.log(state);
        commit('setRoutePermissions', dummyData);
    }
}

export default actions;