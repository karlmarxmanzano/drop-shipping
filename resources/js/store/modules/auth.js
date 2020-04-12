import axios from 'axios'
import { getCurrentUser, getLocalPermissions, getLocalRoles, setHTTPToken } from "../../helpers/auth";

const currentUser = getCurrentUser();
const permissions = getLocalPermissions();
const roles = getLocalRoles();

export default {
    namespaced: true,

    state: {
        token: null,
        auth: false,
        currentUser: null,
        authPermissions: permissions,
        authRoles: roles,
        loading: false,
        err_msg: null
    },

    mutations: {
        login(state){
            state.loading = true
            state.err_msg = null
        },
        loginSuccess(state, payload){
            state.err_msg = null
            state.auth = true
            state.loading = false
            state.token = payload.access_token
            state.currentUser = payload.user
            state.auth_permissions = payload.permissions
            state.auth_roles = payload.roles

            localStorage.setItem("user", state.currentUser);
            localStorage.setItem("permissions", state.authPermissions);
            localStorage.setItem("roles", state.authRoles);

        },
        loginFailed(state, payload){
            state.loading = false;
            state.err_msg = payload.error;
        },
        logout(state){
            localStorage.removeItem("user");
            localStorage.removeItem("permissions");
            localStorage.removeItem("roles");

            state.auth = false;
            state.auth_permissions = null;
            state.auth_roles = null;
        },
    },

    actions: {
        async signIn ({ commit }, credentials) {
            await axios.post('/auth/signin', credentials)
                .then(res => {
                    commit('loginSuccess', res.data)
                })
                .catch(err => {
                    commit('loginFailed', err)
                })
        },
        async attempt ({ commit, state }, token) {
            
            if (token) {
                commit('SET_TOKEN', token)
            }

            if (!state.token) {
                return
            }
            
            try {

                let response = await axios.get('/auth/me')

                commit('SET_USER', response.data)
                commit('SET_AUTH', true)

            } catch (err) {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
                commit('SET_AUTH', false)
            }
        },
        signOut ({ commit }) {
            return axios.post('/auth/signout')
                .then(res => {
                    commit('SET_TOKEN', null)
                    commit('SET_USER', null)
                })
        }
    },

    getters: {
        authenticated (state) {
            return state.auth
        },
        currentUser (state) {
            return state.user
        },
        authPermissions(state) {
            return state.permissions
        },
        authRoles(state) {
            return state.roles
        },
        isLoading(state){
            return state.loading
        },
        authError(state){
            return state.err_msg
        },
    }
}