import React, { createContext, useReducer } from 'react'

const Store = createContext()
const initialState = {
    status: 1, // 1: 正常, 2: 通信中
    senshuken_id: null,
    title: '〇〇'
}
const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_STATE':
            return {
                ...state,
                [action.data.key]: action.data.value
            }
        default:
            return state
    }
}
const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>
}

export { Store, Provider, initialState }