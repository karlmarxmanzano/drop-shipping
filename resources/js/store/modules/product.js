import axios from 'axios'

export default {
    namespaced: true,

    state: {
        product: null,
        list: []
    },

    mutations: {
        SET_PRODUCT (state, payload) {
            state.product = payload
        },
        SET_LIST (state, payload) {
            state.list = payload
        }
    },

    actions: {
        async allProducts ({ commit }, payload) {
            return await axios.get('/product/list', payload)
                .then(res => {
                    commit('SET_LIST', res.data.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        async createProduct ({ commit }, payload) {
            return await axios.post('/product/create', payload)
                .then(res => {
                    commit('SET_PRODUCT', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        async updateProduct ({ dispatch }, payload) {
            return await axios.post('/product/edit/{product}', payload)
                .then(res => {
                    dispatch('SET_PRODUCT', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        async deleteProduct ({ dispatch }, payload) {
            return await axios.post('/product/delete/{product}', payload)
                .then(res => {
                    dispatch('SET_PRODUCT', res.data)
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
        productList (state) {
            return state.list
        }
    }
}