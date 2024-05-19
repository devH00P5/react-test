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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Temporibus, quaerat porro consequatur odit voluptatibus 
sint iste quasi eum, fugiat fuga natus molestiae 


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
            
        
        </div>


    </div>
  )
}
