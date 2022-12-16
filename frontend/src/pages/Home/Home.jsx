import React from 'react'
import Categories from '../../components/Categories/Categories'
import SpecialProducts from '../../components/SpecialProducts/SpecialProducts'
import Slider from '../../components/Slider/Slider'

const Home = () => {
  return (
    <div>
      <Slider/>
      <SpecialProducts type="featured"/>
      <Categories/>
      <SpecialProducts type="trending"/>
    </div>
  )
}

export default Home