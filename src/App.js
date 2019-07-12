import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import CustomNavbar from './components/CustomNavbar';
import ContactPage from './components/Contact';

function App() {
  return (
    <Router>
        <CustomNavbar />
        <Route exact path="/" component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/news" exact component={News} />
        <Route path="/contact" exact component={ContactPage} />
    </Router>
  );
}

export default App;
