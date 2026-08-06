import React, { useState, useEffect } from 'react'; 
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Footer from '../components/Footer';
import WhyParticipate from '../components/WhyParticipate';
import Tracks from '../components/Tracks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ImageSlider from '../components/ImageSlider';
import WhatToExpect from '../components/Expect';
import Sponsors from '../components/Sponsors';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (location.state?.scrollTarget) {
      const target = location.state.scrollTarget;
      setTimeout(() => {
        scroller.scrollTo(target, {
          duration: 500,
          smooth: true,
          offset: -80,
        });
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      
      <section id="hero" data-aos="fade-up" data-aos-duration="1000">
        <HeroSection />
      </section>

      <section id="about" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000">
        <About />
      </section>

      <section id="participation" data-aos="fade-right" data-aos-delay="200">
        <WhyParticipate />
      </section>

      <section id="tracks" data-aos="fade-right" data-aos-delay="100">
        <Tracks />
      </section>

      <section id="expect" data-aos="fade-right" data-aos-delay="100">
        <WhatToExpect />  
      </section>  
      
      <section id="gallery" data-aos="fade-right" data-aos-delay="100">
        <ImageSlider />
      </section>

      <section id="testimonials" data-aos="fade-right" data-aos-delay="200">
        <Testimonials />
      </section>

      <section id="faq" data-aos="fade-right" data-aos-delay="200">
        <FAQ />
      </section>

      <section id='sponsors' data-aos="fade-right" data-aos-delay="200">
        <Sponsors />
      </section>
      <Footer/>
    </>
  );
};

export default Home;
