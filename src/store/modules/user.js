import axios from "axios";
import Vuecookies from "vue-cookies";

export const user = {
    namespaced: true, // user 가 모듈로 사용될수 있다는 코드(안쓰면 unknown 뜸)
    state: {
        accessToken: null,
    },
    mutations: {
        loginToken: (state,payload) => {
            Vuecookies.set('accessToken', payload.accessToken, '2s');
            state.accessToken = payload.accessToken;
        }
    },
    actions: {
        login: ({commit}, params) => {
            return axios.post('http://localhost:8080/api/v1/auth/authenticate',params)
                .then(res => {
                    console.log(res);
                    commit('loginToken', res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        },

        register: ({commit}, params) => {
            return axios.post('http://localhost:8080/api/v1/auth/register',params)
                .then(res => {
                    console.log(res);
                    commit('loginToken', res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
}
