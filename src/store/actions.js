import * as actions from './types';

export  const USER_LOGIN =(payload)=>{
    console.log(payload,'............................................')
    return{
        type: actions.USER_LOGIN,
        data:payload,
    }
}

export  function USER_SIGNUP(){
    return{
        type:actions.USER_SIGNUP,
    }
}


export  function GET_USERS(){
    console.log('actions get user')
    return{
        type:actions.GET_USERS,
    }
}