import React from 'react'
import Hero from '../components/Hero';
import Category from '../components/Category';
import BestAdmin from '../components/BestAdmin';
import NewsLetter from '../components/NewsLetter';


const Home = () => {
  return (
    <div className='mt-10'>
    <Hero/>
    <Category/>
    <BestAdmin/>
    <NewsLetter/></div>
  )
}

export default Home