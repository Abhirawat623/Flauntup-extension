
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


                     default: return state;
                                         }
    }
   