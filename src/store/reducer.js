import * as actions from './types'

const initialState={
    abc: 10,
    registeredUsers:[],
    isLogged: false,
    userDetails:{}
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actions.USER_LOGIN:{
            return{
                ...state,
                registeredUsers: state.registeredUsers = 0 ? action.data : [...state.registeredUsers, action.data],
                // registeredUsers: state.registeredUsers = 0 ? action.data : (action.data),
                abcusers:[...state.registeredUsers,action.data]
            }
        }

        case actions.USER_SIGNUP:{
            return{
                ...state,
                registeredUsers: state.registeredUsers < 0 ? action.data : [...state.registeredUsers, action.data]
            }
        }

        case actions.GET_USERS:{
            // console.log('getuser reducer')
            // console.log(typeof(state.userDetails),'reducer')
            return{
                ...state,
                listusers: state.registeredUsers.length > 0 ? state.registeredUsers : null
            }
        }


        default:{
            return state;
        }
    }
}


export default reducer;