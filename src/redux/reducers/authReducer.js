import {
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    CREATE_FIREBASE_APP,
    LOGIN_ERROR,
    PASSWORD_UPDATE_SUCCESS,
    PASSWORD_UPDATE_ERROR,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_ERROR,
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR
} from "../actions/authActions";

const initialState = {
    firebaseApp: null,
    successMessage: null,
    error: null
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: null
            };
        case LOGIN_ERROR:
            return {
                ...state,
                error: action.payload.error
            };

        case LOGOUT_SUCCESS:
            return {
                ...state,
                error: null
            };

        case PASSWORD_UPDATE_SUCCESS:
            return {
                ...state,
                successMessage: "Successfully updated your password!",
                error: null
            };

        case PASSWORD_UPDATE_ERROR:
            return {
                ...state,
                error: action.payload.error
            };

        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                successMessage: "Successfully sent an email with a reset link to your address!",
                error: null
            };

        case RESET_PASSWORD_ERROR:
            return {
                ...state,
                error: action.payload.error
            };

        case CREATE_USER_SUCCESS:
            return {
                ...state,
                successMessage: "Successfully created a new User!",
                error: null
            };

        case CREATE_USER_ERROR:
            return {
                ...state,
                error: action.payload.error
            };

        case CREATE_FIREBASE_APP:
            return {
                ...state,
                firebaseApp: action.payload.firebaseApp
            };

        default:
            return state;
    }
}
