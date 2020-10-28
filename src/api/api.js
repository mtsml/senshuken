import axios from 'axios'
import mock from './mock'


const apiUrl = 'https:xxx'

const client = axios.create({
    baseURL: apiUrl
})

if (process.env.NODE_ENV !== 'production') {
    mock.run(client)
}


export const getSenshukens = () => {
    return callApi('/senshuken')
}

export const getSenshuken = (id) => {
    return callApi(`/senshuken/${id}`)
}

const callApi = (url) => {
    return client.get(url)
        .then(response =>  response.data)
        .catch(err => alert(err)) // TODO: ErrorBoundary実装
}