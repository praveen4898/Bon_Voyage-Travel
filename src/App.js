import logo from './logo.svg';
import './App.css';
import Allroutes from './Routing/Allroutes';
import { Navbar } from './Components/Navbar';
import {useSelector} from 'react-redux'
import FooterSection from './Components/Footer';

function App() {
  const state=useSelector(state=>state);
  console.log("state",state);

  

  const mail='admin@gmail.co';
  return (
    <div className="App">
     { (mail==='admin@gmail.com')?<Allroutes />:
     <>
    
       <Navbar/>
      <Allroutes />
      <FooterSection />
      </>
    }
     </div>
  );
}

export default App;
