import React, { useRef } from 'react'
//GSAP Imports
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo from '../imgs/logo.png'

//food Images
import burger from '../imgs/136168132_3c42feb1-9d73-4c03-bcdd-a496e59f4994 (1).png';
import pizza from '../imgs/136529089_a1e4374c-e98e-4b15-a9ec-a2fe7fc511b9.png';
import foodItem from '../imgs/burger_8648590.png';
import Services from './Services';
import MenusList from './MenusList';






console.log('Home Loaded')
export default  function Home() {
  
    //GSAP Code
const hero_message =useRef();
const hero_header=useRef()
useGSAP(()=>{
    gsap.from(hero_message.current,{opacity:0,duration:4,delay:4})
    gsap.from(hero_header.current,{y:'-100px',opacity:0,duration:4})
})
//Slick settings
        const settings = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            //slidesToScroll: 3,
            autoplay:true,
            className: "center",
            centerMode:true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
      };
  return (
    <>
    <div className='hero_wrapper'>
        <div className='hero_content'>
            <div className='logo'>
                <img src={logo} alt='company logo' />

            </div>
            <div className='hero_description' >
                <h1 className='hero_header' ref={hero_header}>
                    Welcome
                </h1>
                <p className='hero_message' ref={hero_message}>
                Discover culinary excellence where each dish is a masterpiece, and every bite a symphony of flavors.
                 Indulge in a dining experience that transcends mere satisfaction.
          

                </p>

            </div>
            <div className='hero_slider slider-container'>
            <Slider {...settings}>
      
      <div className='hero_slide'>
        <div className='hero_slide_img'>
            <img src={burger} alt='food item carousel'/>

        </div>
        
        <div className='hero_slide_desc'>
            <p>Food</p>

        </div>
        
        
      </div>
      
      <div className='hero_slide'>
        <div className='hero_slide_img'>
            <img src={pizza} alt='food item carousel'/>

        </div>
        
        <div className='hero_slide_desc'>
            <p>Food</p>

        </div>
        
        
      </div>
      <div className='hero_slide'>
        <div className='hero_slide_img'>
            <img src={foodItem} alt='food item carousel'/>

        </div>
        
        <div className='hero_slide_desc'>
            <p>Food Item</p>

        </div>
        
        
      </div>
      
    </Slider>

            </div>
            <div className='scrl-indicator'>
              <p className='scrl-description'>
              Scroll To Discover Culinary Excellence
              </p>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="26" viewBox="0 0 30 26">
  <g id="p1" data-name="Polygon 1" transform="translate(30 26) rotate(180)" >
    <path d="M 29.13430023193359 25.5 L 0.8657025098800659 25.5 L 15.00000095367432 1.00054931640625 L 29.13430023193359 25.5 Z" stroke="none"/>
    <path d="M 15.00000095367432 2.001115798950195 L 1.731414794921875 25 L 28.26858711242676 25 L 15.00000095367432 2.001115798950195 M 15.00000095367432 0 L 30 26 L 1.9073486328125e-06 26 L 15.00000095367432 0 Z" stroke="none" />
  </g>
</svg>


            </div>
            
        
        </div>


    </div>
    {/*< Services />*/}
    <MenusList />
    </>
  )
}
