import axios from 'axios'

export default {
    namespaced: true,

    state: {
        details: null,
        list: []
    },

    mutations: {
        SET_PERMISSION_INFO (state, payload) {
            state.details = payload
        },
        SET_LIST (state, payload) {
            state.list = payload
        }
    },

    actions: {
        async getList ({ commit }, payload) {
            return await axios.get('/permissions/list', payload)
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
        productInfo (state) {
            return state.product
        },
        getPermissionList (state) {
            return state.list
        }
    }
}