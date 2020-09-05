export default (state, action) =>{
    const {type, payload} = action

    switch(type){
      
        case 'GET_STUDENT':
            return{
             ...state,
             students:payload,
             loading:false
            }
        case 'ADD_STUDENT':
            return{
                ...state,
                singleStudent:payload,
                loading:false
            }
        case 'DEL_STUDENT':
            return {
                ...state,
                students: state.students.filter(stu => stu._id !== payload),
                loading:false
            }
        case "STUDENT_ERROR":
            return{
                ...state,
                error:payload,
                loading:false
            }
        default:
            return state
    }
}