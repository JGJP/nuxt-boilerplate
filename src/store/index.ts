import { GetterTree, ActionTree, MutationTree } from "vuex"

export const state = () => ({
	testArray: [],
	testValue: "sample value",
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
	testValue: state => state.testValue,
}

export const mutations: MutationTree<RootState> = {
	CHANGE_TEST_VALUE: (state, newValue: string) => { state.testValue = newValue },
}

export const actions: ActionTree<RootState, RootState> = {
	fetchNewValue({ commit }) {
		commit("CHANGE_TEST_VALUE", "New value")
	},
}
