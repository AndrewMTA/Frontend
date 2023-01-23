import React from 'react'
import styles from "../style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "../components";
import {BrowserRouter, Route, Routes} from "react-router-dom"

const Home = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
    
    
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
   
        <Business />
        <Footer />
      </div>
    </div>
  
  </div>
  )
}

export default Home