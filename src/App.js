import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';
import HeroSection from './components/HeroSection';
import { Button } from './components/Button';
import Cards from './components/Cards';
import CardItem from './components/CardItem';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>

        <Navbar />
        <HeroSection />
        {/* <Button /> */}
        <Cards />
        {/* <CardItem /> */}
        <Footer />


        <Routes>
          <Route path='./' exact component={Home} />
          <Route path='./services' component={Services} />
          <Route path='./products' component={Products} />
          <Route path='./sign-up' component={SignUp}/>
        </Routes>

      </Router>
      
       
  </>
  );
}

export default App;
