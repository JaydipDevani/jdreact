import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Fa500Px } from "react-icons/fa";
import Slider from "react-slick";

const About = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Header />
      <Slider {...settings}>
      <div>
        {/* <h3>1</h3> */}
        <img src="https://www.cdmi.in/sliders/Game-Design--Development.jpg" alt="" className='w-100' />
      </div>
      <div>
        {/* <h3>2</h3> */}
        <img src="https://www.cdmi.in/sliders/int-ext.jpg" alt="" className='w-100' />
      </div>
      <div>
        {/* <h3>3</h3> */}
        <img src="https://www.cdmi.in/sliders/2.webp" alt="" className='w-100' />
      </div>
      <div>
        {/* <h3>4</h3> */}
        <img src="https://www.cdmi.in/sliders/Ethicakl-Hacking.webp" alt="" className='w-100' />
      </div>
      <div>
        {/* <h3>5</h3> */}
        <img src="https://www.cdmi.in/sliders/Slider.jpg" alt="" className='w-100' />
      </div>
      <div>
        {/* <h3>6</h3> */}
        <img src="https://www.cdmi.in/sliders/2d-3d-Animi-19201.jpg" alt="" className='w-100' />
      </div>
    </Slider>
      {/* <h1>About</h1> */}
      <Fa500Px />
      <Footer />
    </div>
  )
}

export default About
