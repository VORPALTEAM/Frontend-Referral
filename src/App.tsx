import React from 'react';
import Footer from 'components/footer';
import Header from 'components/header';
import { footerLinks } from 'components/footer/FooterConfig';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ minHeight: 200, color: "#FFF", paddingTop: 200, textAlign: 'center' }}>
            In progress
      </div>
      <Footer items={footerLinks} />
    </div>
  );
}

export default App;
