import MockAdapter from 'axios-mock-adapter'


const senshuken = [
    {id: 1, name: 'クイズ1', desc: '111111111111'},
    {id: 2, name: 'クイズ2', desc: '222222222222'},
    {id: 3, name: 'クイズ3', desc: '333333333333'},
]

export default {
    run: client => {
        const mock = new MockAdapter(client)
        
        mock.onGet('/senshuken')
            .reply(200, {'senshuken': senshuken})

        mock.onGet(new RegExp('/senshuken/[^/]+')).reply(config => {
            const id = config.url.match(/\/senshuken\/(.+)/)[1]
            const res = senshuken[id-1]
            // const res = senshuken.find(s => s.id===id)
            return [200, {senshuken: res}]
        })
    }
}