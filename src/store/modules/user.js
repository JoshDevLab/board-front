import axios from "axios";
import Vuecookies from "vue-cookies";
import router from "@/router";

export const user = {
    namespaced: true, // user 가 모듈로 사용될수 있다는 코드(안쓰면 unknown 뜸)
    state: {
        accessToken: null,
        isAuthenticated: false
    },
    mutations: {
        loginToken: (state,payload) => {
            Vuecookies.set('accessToken', payload.accessToken, '2s');
            state.accessToken = payload.accessToken;
            state.isAuthenticated = true;
        }
    },
    actions: {
        login: ({commit}, params) => {
            return axios.post('http://localhost:8080/api/v1/auth/authenticate',params)
                .then(res => {
                    console.log(res);
                    commit('loginToken', res.data);
                    router.push('/board'); // 모듈애서는 this.$router 가 사용되지 않음, 인스턴스에서만 사용이 가능
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
