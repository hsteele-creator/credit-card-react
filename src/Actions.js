export const UPDATE_USER = "UPDATE_USER"

export const updateUser = (name) => {
    return {type: UPDATE_USER, payload : {name}}
}