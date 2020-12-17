import axios from 'axios'
const API_URL = 'https://api.catlow.tech/'

export const getPosts = ({ commit }) => {
    axios.get('https://api.catlow.tech/posts')
        .then(response => {
            commit('SET_POSTS', response.data)
        })
}

export const getPost = ({ commit }, postId) => {
    axios.get(`https://api.catlow.tech/posts/${postId}`)
        .then(response => {
            commit('SET_POST', response.data)
        })
}

export const addPost = ({commit}, { title, })