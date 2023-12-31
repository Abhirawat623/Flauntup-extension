
import './App.css';
import { images } from './database/images';
import {quotes} from './database/qoutes';
import { Home } from './page/home/home';
import { useBrowser } from './Context/Browser-context';
import {Task} from './page/task/task'
import { useEffect } from 'react';
import { Weather } from './components/weather/weather';



//to make wallpaperselection random
const index= Math.floor(Math.random()*(images.length));
const randomWallpaper = images[index].thumbnail;


function App() {


//to make qoutes selection random
const randomQutes= quotes[index].quote;

//for name

const {name,browserDispatch} = useBrowser();

//called useBrowser
  
useEffect(()=>{
  const userNAme = localStorage.getItem('name');
  browserDispatch(
    {type:"NAME",
  payload:userNAme}
  )
},[])

const handleReset=()=>{
window.location.reload();
localStorage.removeItem("task");
localStorage.removeItem("name");
localStorage.removeItem("todo");


}
  return (
    
    <div className='wallpaper' style={{backgroundImage: `url("${randomWallpaper}")`}}>
   <Weather/>
   <button className='reset-btn' onClick={handleReset}>Reset</button>
    { name? <Task data ={randomQutes} /> : <Home/>}
    </div>
    
  );
}

export default App;
