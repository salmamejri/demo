
import './App.css';
import Pub from './component/Pub';
import Navbar from './component/Navbar';
import Slide from './component/Slide';
import { SlideData } from './component/SlideData';


function App() {
  return (
    <div >
    <Pub/> 
    <Navbar/>
    <Slide slides={SlideData}/>
  
  
    </div>
  );
}

export default App;
