import { AuthState } from './AuthContext';

type AuthAction =
    |{type : 'signIn'}
    |{type : 'logout'}
    |{type: 'ChangeFavIcon', payload: string}
    |{type: 'ChangeName', payload: string};

export const authReducer = ( state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn:true,
                username: 'no-username-yer',
            };
        case 'logout':
            return {
                ...state,
                isLoggedIn:false,
                username: undefined,
                favoriteIcon: undefined,
            };
        case 'ChangeFavIcon':
            return {
                ...state,
                favoriteIcon:action.payload,
            };
        case 'ChangeName':
            return {
                ...state,
                username:action.payload,
            };
        default:
            return state;
    }
};
