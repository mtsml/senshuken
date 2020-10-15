import MockAdapter from 'axios-mock-adapter'


const senshuken = ['クイズ1', 'クイズ2', 'クイズ3']

export default {
    run: client => {
        const mock = new MockAdapter(client)
        
        mock.onGet('/senshuken')
            .reply(200, {'senshuken': senshuken})
    }
}