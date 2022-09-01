import './App.css';
import Cards from './Components/Cards/Cards';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar'
import Team from './Components/Team/Team';
import Usp from './Components/Usp/Usp';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Cards/>
     <Usp/>
     <Team/>
     <Footer/>
    </div>
  );
}

export default App;
