import axiosInstance from '@/api/axiosInterceptor'

export const state = () => ({
  user: {}
})

export const mutations = {
  SET_USER_INFO(state, { user }) {
    state.user = user
  }
}

export const actions = {
  async getUserInfo({ state, commit, rootState }) {
    if (Object.prototype.hasOwnProperty.call(state.user, 'email')) {
      return
    }
    try {
      const result = await axiosInstance.get(
        `/${rootState.globalModule.workspaceSlug}/user-info`
      )
      commit('SET_USER_INFO', {
        user: result.data
      })
    } catch (err) {
      console.error(err)
    }
  }
}

export const getters = {
  isIDExist(state) {
    return state.id !== null
  }
}
