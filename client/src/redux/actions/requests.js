import axios from "axios";
const apiUrl = 'http://localhost:4000/api/pictures/'

export const deleteApi = (id) => {
    return axios({
        method: "delete", 
        url: `${apiUrl}${id}`,
    })
}

export const getApi = () => {
    return axios({
        method: "get", url: apiUrl
    })
}

export const postApi = (payload) => {
    return axios({
        method: "post", url: apiUrl, data: payload
    })
}

export const editApi = (payload) => {
    return axios({
        method: "put", url: `${apiUrl}${payload.id}`, data: payload.body
    })
}