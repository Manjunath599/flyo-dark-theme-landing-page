 import React from 'react';

import Header from './components/header';
import Main from './components/main';
import Productive from './components/productiveSection';
import Email from './components/emailSection';
import Profile from './components/profileSection';
import Footer from './components/footer';

function App() {
  return (
    <section className='text-gray-200 bg-[#181f2a] font-body'>
      <Header />
      <Main />
      <Productive />
      <Profile />
      <Email />
      <Footer />
    </section>
  );
}

export default App;