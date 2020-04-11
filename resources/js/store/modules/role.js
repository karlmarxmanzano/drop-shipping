import axios from 'axios'

export default {
    namespaced: true,

    state: {
        details: null,
        list: []
    },

    mutations: {
        SET_ROLE_INFO (state, payload) {
            state.details = payload
        },
        SET_LIST (state, payload) {
            state.list = payload
        }
    },

    actions: {
        async getList ({ commit }, payload) {
            return await axios.get('/roles/list', payload)
                .then(res => {
                    commit('SET_LIST', res.data.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        async getProductInfo ({ commit }, payload) {
            return await axios.get('/product/details/' + payload)
                .then(res => {
                    commit('SET_PRODUCT_INFO', res.data.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        async createProduct ({ commit }, payload) {
            return await axios.post('/product/create', payload)
                .then(res => {
                    commit('SET_PRODUCT_INFO', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },

    getters: {
        roleInfo (state) {
            return state.product
        },
        getRolesList (state) {
            return state.list
        }
    }
}