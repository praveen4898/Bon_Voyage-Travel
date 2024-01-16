import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import Allroutes from './Routing/Allroutes';


function App() {
  return (
    <div className="App">
     
      
      <Navbar/>
      <Allroutes />
     
    </div>
  );
}

export default App;
