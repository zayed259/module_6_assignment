// import { useState } from 'react'

import Content from "./assets/components/Content";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import "./assets/css/milligram.css";
import "./assets/css/style.css";


const App = () => {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;