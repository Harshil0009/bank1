import React from 'react';
import BankDashboard from './Bankdashbord';
import FeaturesSection from './FeaturesSection';
import UseCases from './UseCases';
import Feautres from './Feautres';
import FAQ from './FAQ';
import Testimonial from './Testimonial';
import Footer from './Footer';

function Home() {
  return (
    <>
      <BankDashboard />
      <FeaturesSection />
      <UseCases />
      <Feautres />
      <FAQ />
      <Testimonial />
      <Footer />
    </>
  );
}

export default Home;
