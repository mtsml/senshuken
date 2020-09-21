export const changeStatus = (dispatch, status) => {
    dispatch({
        type: 'SET_STATE',
        data: {
            key: 'status',
            value: status
        }
    })
}

export const setState = (dispatch, key, value) => {
    dispatch({
        type: 'SET_STATE',
        data: {
            key: key,
            value: value
        }
    })
}