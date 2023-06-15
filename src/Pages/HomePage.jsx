import React from 'react'
import Banner from '../Components/Banner'
import Search from '../Components/Search'
import HouseList from '../Components/HouseList'
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header/>
   
      <Banner/>
      <Search/>
      <HouseList></HouseList>
      <Footer/>
    </div>
  )
}

export default HomePage