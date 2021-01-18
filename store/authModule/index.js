import Cookies from 'js-cookie'
import axios from 'axios'

export const state = () => ({
  isLoggedIn: false,
})

export const mutations = {
  SET_LOGGEDIN(state, bool) {
    state.isLoggedIn = bool
  },
}

export const actions = {
  async init({ commit, dispatch, rootGetters }) {
    if (Cookies.get('token')) {
      await dispatch('userInfoModule/getUserInfo', null, { root: true })
      const result = rootGetters['userInfoModule/isIDExist']
      if (result) commit('SET_LOGGEDIN', true)
      return result
    }
    return false
  },
  async logIn({ state, commit, rootState, dispatch }, { password, email }) {
    try {
      const result = await axios.post(
        `${process.env.apiUrl}/auth/login`,
        {
          email,
          password,
        }
      )
      Cookies.set('token', result.data.token, {
        expires: result.data.expires,
      })
      commit('SET_LOGGEDIN', true)
      await dispatch('userInfoModule/getUserInfo', {}, { root: true })
      await this.$router.push({ name: 'slug' })
    } catch (err) {}
  },
  async logOut({ commit }) {
    Cookies.remove('token')
    commit('SET_LOGGEDIN', false)
    await this.$router.push({ name: 'slug-auth' })
  },
}
