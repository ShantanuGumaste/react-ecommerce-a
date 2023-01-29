import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import Cards from './Components/Cards';

function App() {
  return (
    <div>
      <Header/>
      <Carousel/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
