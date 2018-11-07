import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		user: {},
		userName: ""
	},
	mutations: {
		setUser(state, flag) {
			state.user = flag;
			state.userName = flag.username
			localStorage.setItem('userName', state.userName); //JSON.stringify()
		},
		setUserName(state, flag) {
			state.userName = flag;
		}
	}
});
export default store