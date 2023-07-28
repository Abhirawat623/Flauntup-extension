
//state s not object
export const browserReducer=(state, {type,payload })=>{


switch(type){
    case "NAME": 
     return{
       ...state,
         name: payload
        }
        
       case "TIME":
        return {
          ...state,
          time: payload
        };
        case "MESSAGE":
          return{
            ...state,
            message:payload
          }

          case "TASK":
            return{
                ...state,
                task:payload
            }
              case "CLEAR":
                return{
                  ...state,
                  task:null
                }

                     default: return state;
                                         }
    }
   