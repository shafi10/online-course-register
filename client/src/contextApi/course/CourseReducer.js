export default (state,action) =>{
  const {type, payload} = action
    
  switch(type){
      case 'GET_COURSE':
          return{
              ...state,
              courses:payload,
              loading:false
          }
        case 'ADD_COURSE':
            return {
                ...state,
                loading:false
            }
        case 'SINGLE_COURSE':
            return {
                ...state,
                singleCourse:payload,
                loading:false
            }
        case 'REGI_STUDENT':
            return{
                ...state,
                loading:false
            }
        case 'DEL_STU':
            return {
                ...state,
                singleCourse: state.singleCourse ,
                loading:false
            }
        case 'DEL_TEC':
            return {
                ...state,
                singleCourse: state.singleCourse,
                loading:false
            }
        case 'REGI_TEACHER':
            return{
                ...state,
                loading:false
            }
        case 'DEL_COUR':
            return {
                ...state,
                courses: state.courses.filter(cou => cou._id !== payload),
                loading:false
            }
        case "COURSE_ERROR":
            return{
                ...state,
                loading:false,
                error:payload
            }

        default:
            return state
  }

}