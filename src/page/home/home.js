import { useBrowser } from "../../Context/Browser-context"

export const Home =()=>{

  
  const {name, browserDispatch} = useBrowser();
  

  const handleFormSubmit=(event)=>{
    event.preventDefault();
  }
  
  const handleChangeName =(event)=>{
    if(event.key === 'Enter' && event.target.value.length >0){
      browserDispatch(
        {
          type : "NAME",
          payload: event.target.value

        })
        localStorage.setItem('name',event.target.value);
    }

  }


    return(

         <div className="home-container d-flex gap align-center justify-center direction-column">
           <h1 className="main-heading">Flauntup Extension</h1>
             <div className="name-heading">
                 <span className="heading-3">Hello,What's your name?</span>
             </div>
              <form className="d-flex gap align-center justify-center direction-column" onSubmit={handleFormSubmit}>
                 <input className="name-input" onKeyPress={handleChangeName} />
                 
              </form>
         </div>

    )
}