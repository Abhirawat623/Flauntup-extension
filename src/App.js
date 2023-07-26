
import './App.css';
import { images } from './database/images';
import {quotes} from './database/qoutes';
import { Home } from './page/home/home';
function App() {

//to make wallpaperselection random
const index= Math.floor(Math.random()*(images.length));
const randomWallpaper = images[index].thumbnail;

//to make qoutes selection random
const randomQutes= quotes[index].quote;
  
  return (
    
    <div className='wallpaper' style={{backgroundImage: `url("${randomWallpaper}")`}}>
  
     <Home/>

    </div>
    
  );
}

export default App;
