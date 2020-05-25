import { Module } from "vuex";
import actions from "@/store/MainModule/actions";
import mutations from "@/store/MainModule/mutations";
import state from "@/store/MainModule/state";
import getters from "@/store/MainModule/getters";
import { MainState, RootState } from '@/store/types';

const namespaced: boolean = true;

const Main: Module<MainState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};

export default Main;
