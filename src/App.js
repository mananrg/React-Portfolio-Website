import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { ProjAndCertificates } from "./components/ProjAndCerti";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import React, { useEffect } from 'react';

function App() {

  return (

    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <ProjAndCertificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
