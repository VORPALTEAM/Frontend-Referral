import React from 'react';
import { useSelector } from 'react-redux';
import Footer from 'components/footer';
import Header from 'components/header';
import { footerLinks } from 'components/footer/FooterConfig';
import PromoPage from 'components/promo';
import { RootState } from 'state/reducer';
import './App.css';

function App() {

  const State = useSelector((state: RootState) => {
     return state
  })

  return (
    <div className="App">
      <Header />
      {!State.account ? <PromoPage /> :
      <div style={{ minHeight: 200, color: "#FFF", paddingTop: 200, textAlign: 'center' }}>
            In progress
      </div>}
      <Footer items={footerLinks} />
    </div>
  );
}

export default App;
