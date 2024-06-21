import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';

function Homepage() {
  return (
    <div>
        <Header/>
        <Banner/>
        <Services/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Homepage