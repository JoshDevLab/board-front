import axios from "axios";
import store from "@/store";

axios.defaults.baseURL = 'http://localhost:8080';

axios.interceptors.request.use(config => {
    // 로그인이 되어 있을때만 Bearer 토큰을 요청 헤더에 추가
    if(store.state.isAuthenticated) {
        config.headers.Authorization = `Bearer ${store.state.accessToken}`;
    }
    return config;
})
