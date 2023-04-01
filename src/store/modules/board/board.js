import axios from "axios";

export const board = {
    namespaced: true, // 모듈로 사용될수 있다는 코드(안쓰면 unknown 뜸)

    actions: {
        registerBoard: ({commit}, params) => {
            return axios.post("http://localhost:8080/api/v1/board",params);
        }
    }
}