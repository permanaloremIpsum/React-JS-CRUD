import axios from 'axios';

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USERS_DETAIL = "GET_USERS_DETAIL";
export const POST_USERS_CREATE = "POST_USERS_CREATE";

export const getUsersList = () => {
    return (dispatch) => {
        axios
            .get('http://my-json-server.typicode.com/permanaloremIpsum/json-react/users')
            .then(function (response) {
                dispatch({
                    type: GET_USERS_LIST,
                    payload: {
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                console.log(error);
                dispatch({
                    type: GET_USERS_LIST,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}

export const getUsersDetail = (id) => {
    return (dispatch) => {
        axios
            .get('http://my-json-server.typicode.com/permanaloremIpsum/json-react/users/'+id)
            .then(function (response) {
                dispatch({
                    type: GET_USERS_DETAIL,
                    payload: {
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                console.log(error);
                dispatch({
                    type: GET_USERS_DETAIL,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}

export const postUsersCreate = (data) => {
    return (dispatch) => {
        axios
            .post('http://my-json-server.typicode.com/permanaloremIpsum/json-react/users', data)
            .then(function (response) {
                console.log(response)
                dispatch({
                    type: POST_USERS_CREATE,
                    payload: {
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                console.log(error);
                dispatch({
                    type: POST_USERS_CREATE,
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}

export const deleteUsersDetail = () => {
    return (dispatch) => {
        dispatch({
            type: GET_USERS_DETAIL,
            payload: {
                data: false,
                errorMessage: false
            }
        })
    }
}