import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";
import './App.scss';
import Header from './component/Header';
import Home from './component/Home';
import Reopening from './component/Reopening';
import Footer from './component/Footer';
import Sadona from './component/Sadona';



function App() {
  return (
   
    <div className="App">
      
      <Header/>
      
      <Home/>
      
      <Reopening/>
      <Sadona/>
      
      <Footer/>
      </div>
      
   
  );
}

export default App;


