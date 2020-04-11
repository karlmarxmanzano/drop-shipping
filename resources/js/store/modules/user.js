import axios from 'axios'

export default {
    namespaced: true,

    state: {
        list: []
    },

    mutations: {
        SET_LIST (state, payload) {
            state.list = payload
        }
    },

    actions: {
        async getList ({ commit }, payload) {
            return await axios.get('/users/list', payload)
                .then(res => {
                    commit('SET_LIST', res.data.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },

    getters: {
        getUserList (state) {
            return state.list
        }
    }
}