import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.component';
import Hero from './components/Hero.component';
import CarouselComponent from './components/Carousel.component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <NavBar />
      <div style={{width:'800px'}}>
        <CarouselComponent />
      </div>
      <Routes>
        <Route path='/' component={''} />
      </Routes>
    </Router>
  );
}

export default App;
