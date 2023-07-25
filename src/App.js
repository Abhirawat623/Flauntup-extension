
import './App.css';
import { images } from './database/images';
import {quotes} from './database/qoutes'
function App() {

//to make wallpaperselection random
const index= Math.floor(Math.random()*(images.length+2));
const randomWallpaper = images[index].thumbnail;

//to make qoutes selection random
const randomQutes= quotes[index].quote;
  
  return (
    
    <div className='wallpaper' style={{backgroundImage: `url("${randomWallpaper}")`}}>
  
       <h1 className='qoutes'>{randomQutes}</h1>

    </div>
    
  );
}

export default App;
