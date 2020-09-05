export default (state, action) => {
      const { type,payload } = action

      switch(type){
          case 'GET_TEACHER':
              return{
                  ...state,
                  teachers:payload,
                  loading: false
              }
        case 'POST_TEACHER':
                return{
                    ...state,
                    singleTeacher:payload,
                    loading: false
                }
        case 'DEL_TEACHER':
            return {
                ...state,
                teachers: state.teachers.filter(tec => tec._id !== payload),
                loading:false
            }
        case 'TEACHER_ERROR':
            return{
                ...state,
                loading:false
            }
        default:
            return state
      }
}