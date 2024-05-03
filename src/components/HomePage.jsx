import React from 'react'
import ScrollToTopButton from './scroll-on-top/scroll'
import InvestSection from './Invest-section/InvestSection'
import List from './lists/List'
import Hero from './Container/Hero'

const HomePage = () => {
  return (
    <div>
        <ScrollToTopButton />
        <Hero />
        <InvestSection />
        <List />
  </div>
  )
}

export default HomePage