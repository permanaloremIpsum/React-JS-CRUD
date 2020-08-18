import { GET_USERS_LIST, GET_USERS_DETAIL, POST_USERS_CREATE } from "../actions/userAction";

let initialState = {
    title: 'Web CRUD React JS',
    getUsersList: false,
    errorUsersList: false,
    getUsersDetail: false,
    errorUsersDetail: false,
    getResponDataUsers: false,
    errorResponDataUsers: false 
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_LIST:
            return {
                ...state,
                getUsersList : action.payload.data,
                errorUsersList : action.payload.errorMessage
            }

        case GET_USERS_DETAIL:
            return {
                ...state,
                getUsersDetail : action.payload.data,
                errorUsersDetail : action.payload.errorMessage
            }

        case POST_USERS_CREATE:
            return {
                ...state,
                getResponDataUsers : action.payload.data,
                errorResponDataUsers : action.payload.errorMessage
            }
    
        default:
            return state
    }    
}

export default users
