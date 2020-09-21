import React, { createContext, useReducer } from 'react'

const Store = createContext()
const initialState = {

}
const reducer = (state, action) => {

}
const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>
}

export { Store, Provider, initialState }