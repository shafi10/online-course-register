export default (state, action) => {

    const {type, payload } = action
    switch(type){
        case 'USER_LODED': 
           return {
               ...state ,
               isAuthenticated: true,
               loading:false,
               user:payload
           }
        case 'POST_LOGIN':
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                isAuthenticated:true,
                loading:false
            }
        case 'LOGOUT':
        case "AUTH_ERROR":
            localStorage.removeItem('token')
            return {
                ...state,
                token:null,
                isAuthenticated:false,
                loading:false
            }
        default:
            return state
    }

}



