import React from 'react'
import Hero from '../components/Hero';
import Category from '../components/Category';
import BestSeller from '../components/BestSeller';


const Home = () => {
  return (
    <div className='mt-10'>
    <Hero/>
    <Category/>
    <BestSeller/></div>
  )
}

export default Home