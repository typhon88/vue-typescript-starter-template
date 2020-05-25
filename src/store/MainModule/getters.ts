import { GetterTree } from 'vuex';
import { MainState, RootState } from '@/store/types';

const getters: GetterTree<MainState, RootState> = {
    getRoutePermissions(state): any {
        return state.RoutePermissions;
	}
}

export default getters;