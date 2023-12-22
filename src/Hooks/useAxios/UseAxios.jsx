import axios from "axios";

const instance = axios.create({
    // baseURL: 'http://localhost:5000'
    baseURL: 'https://mobile-store-server-three.vercel.app'
})


const UseAxios = () => {
    return instance
};

export default UseAxios;