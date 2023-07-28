
import './App.css';
import { images } from './database/images';
import {quotes} from './database/qoutes';
import { Home } from './page/home/home';
import { useBrowser } from './Context/Browser-context';
import {Task} from './page/task/task'
import { useEffect } from 'react';

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

  return (
    
    <div className='wallpaper' style={{backgroundImage: `url("${randomWallpaper}")`}}>

    { name? <Task data ={randomQutes}/> : <Home/>}
    </div>
    
  );
}

export default App;
