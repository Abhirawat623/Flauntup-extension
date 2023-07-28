
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


                     default: return state;
                                         }
    }
   