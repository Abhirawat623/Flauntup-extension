

export const Home =()=>{

    return(

         <div class="home-container d-flex gap align-center justify-center direction-column">
           <h1 className="main-heading">Flauntup Extension</h1>
             <div className="name-heading">
                 <span className="heading-1">Hello,What's your name?</span>
             </div>
              <form>
                 <input className="name-input">
                 </input>
              </form>
         </div>

    )
}