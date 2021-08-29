export const state = () => ({
  navPages: null,
})

export const mutations = {
  SET_PAGES(state, page) {
    state.navPages = page
  },
}

export const actions = {
  nuxtServerInit(store, context) {
    const commit = store.commit

    try {
      commit('SET_PAGES', null)
    } catch (error) {
      console.log(error)
    }
  },
}
