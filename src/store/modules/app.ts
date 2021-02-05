interface State {
  sidebar: {
    opened: boolean;
  };
}

const state: State = {
	sidebar: {
		opened: true
	}
};

const mutations = {
	TOGGLE_SIDEBAR: (state: State) => {
		state.sidebar.opened = !state.sidebar.opened;
		// console.log(state.sidebar.opened)
	}
};

const actions = {
	toggleSideBar (context: any) {
		context.commit('TOGGLE_SIDEBAR');
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions
};
