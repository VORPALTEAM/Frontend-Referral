import React from 'react';
import { useSelector } from 'react-redux';
import Footer from 'components/footer';
import Header from 'components/header';
import { footerLinks } from 'components/footer/FooterConfig';
import PromoPage from 'components/promo';
import { RootState } from 'state/reducer';
import './App.css';
import Office from 'components/office';
import WithdrawSection from 'components/WithdrawSection';
import ReferralHero from 'components/ReferralHero';
import ModalRefContainer from 'components/modals';
import ProgressSection from 'components/InProgress';

function App() {

  const State = useSelector((state: RootState) => {
     return state
  })


  return (
    <div className="App">
      <Header />
      {!State.account ? <PromoPage /> :
      <div className="office--page"> 
          <ReferralHero account={State.account} />
          <ProgressSection message="List of rewards now in progress" />
          {/* <WithdrawSection />
          <Office /> */}
      </div>}
      <Footer items={footerLinks} />
      <ModalRefContainer />
    </div>
  );
}

export default App;

