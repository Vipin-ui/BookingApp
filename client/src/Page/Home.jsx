import React from 'react'
import Hero from '../components/Hero.jsx';
import FeaturedDestinaion from '../components/FeaturedDestinaion.jsx';
import ExclusiveOffers from '../components/ExclusiveOffers.jsx';
import Testimonial from '../components/Testimonial.jsx';
import NewsLettr from '../components/NewsLettr.jsx';

function Home() {
  return (
    <>
     <Hero></Hero>
     <FeaturedDestinaion/>
      <ExclusiveOffers/>
      <Testimonial/>
      <NewsLettr/>
    </>
  )
}

export default Home
