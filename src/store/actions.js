import * as actions from './types';

export  const USER_LOGIN =(payload)=>{
    console.log(payload,'............................................')
    return{
        type: actions.USER_LOGIN,
        data:payload,
    }
}

export  const  USER_SIGNUP=(payload)=>{
    console.log(payload,'acions data')
    return{
        type:actions.USER_SIGNUP,
        data:payload
    }
}


export  function GET_USERS(){
    console.log('actions get user')
    return{
        type:actions.GET_USERS,
    }
}