export const UPDATE_USER = "UPDATE_USER"

export const updateUser = (name) => {
    return {type: UPDATE_USER, payload : {name}}
}

export const ADD_CARD = "ADD_CARD"

export const addCard = (data, name) => {
    return {type: ADD_CARD, payload : {data, name}}
}