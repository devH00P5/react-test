import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
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
   //Afro Weekend Coding
   const date_now = new Date();
   
   //End Afro weekend Codes

  
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
                {date_now.getDay()==3||date_now.getDay()==6?<p className='hero_message' ref={hero_message}>
              
                 <svg   viewBox="0 0 1586.112 452.929">
  <defs>
    <linearGradient id="linear-gradient" x1="0.5" x2="0.45" y2="1.083" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="red"/>
      <stop offset="0.532" stop-color="#dce30f"/>
      <stop offset="1" stop-color="#27e934"/>
    </linearGradient>
    <filter id="Path_6" x="303.638" y="11.316" width="497.108" height="239.323" filterUnits="userSpaceOnUse">
      <feOffset dx="-14" dy="-16" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-color="#3b3b3b" flood-opacity="0.529"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Path_4" x="0" y="224.935" width="1586.112" height="227.994" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-2"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur-2"/>
      <feComposite in="SourceGraphic"/>
    </filter>
    <filter id="Path_3" x="798.026" y="0" width="484.81" height="242.639" filterUnits="userSpaceOnUse">
      <feOffset dx="-14" dy="-16" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur-3"/>
      <feFlood flood-color="#3b3b3b" flood-opacity="0.451"/>
      <feComposite operator="in" in2="blur-3"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Group_5" data-name="Group 5" transform="translate(-159.638 -1071.815)">
    <g transform="matrix(1, 0, 0, 1, 159.64, 1071.82)" filter="url(#Path_6)">
      <path id="Path_6-2" data-name="Path 6" d="M93.688,0H.276L73.514-210.868h66.6L279.822,0H186.548l-12.16-35.651H105.849Zm29.157-85.4h34.546l-17.273-52.372ZM300.964,0,261.6-210.868H474.384v52.924H346.4l-20.8,46.706,128.056-8.429v52.924L336.8-78.074l24,81.528Z" transform="translate(326.36 247.18)" fill="url(#linear-gradient)"/>
    </g>
    <g transform="matrix(1, 0, 0, 1, 159.64, 1071.82)" filter="url(#Path_4)">
      <path id="Path_4-2" data-name="Path 4" d="M281.625-166.625l-25.375,11.75-46.625,137.5L244.25-8.5,148,9.5,119.25-64.25l-29.375,66-74.5-4L40.75-12.75,20.5-160.25-2.5-171l130.25-11.5-30,18.375L79.375-54.25l59.875-87.375L177.625-55.25,183.25-161.5,157.5-174.875ZM472.5-77,461.25,5.625l-205.875-9L309.5-22.25,290.25-159.5,255.375-173,451.25-186.375,463.5-129l-20.375-21-60.25.25-9.125,38.125,43-10L429.5-141.25l4.875,86.5L420.75-76.25l-38.125-5.125L367.5-40.75l71.75,9Zm207.625,0L668.875,5.625,463-3.375,517.125-22.25,497.875-159.5,463-173l195.875-13.375L671.125-129,650.75-150l-60.25.25-9.125,38.125,43-10,12.75-19.625L642-54.75l-13.625-21.5L590.25-81.375,575.125-40.75l71.75,9Zm235.5,79.875L816.125-9.25,836-22.25,778-81.875l-6.5,1.25,13.625,66.5,21,22.375L680.375-5.875l22.5-16.625,11.875-136-24.375-15.625L791-186.375l-28.125,21.75,8.375,53,44.125-52.5L803-179.25l91.625,3.375-65,52.25ZM1101.25-77,1090,5.625l-205.875-9L938.25-22.25,919-159.5,884.125-173,1080-186.375,1092.25-129l-20.375-21-60.25.25-9.125,38.125,43-10,12.75-19.625,4.875,86.5L1049.5-76.25l-38.125-5.125L996.25-40.75l71.75,9Zm248.625-93-19.5,8.5-20,146.375,28.25,11.25L1273.25,1.25,1182.375-128l31.25,117.25,33,18.125-139.5-13L1128.375-20l9-137.75L1107.125-170l105-14.875L1276.375-45l-11.25-121.375L1244.875-180ZM1419.5-61.125q16.875-9.25,25.938-21.937a46.088,46.088,0,0,0,9.063-27.312,46.624,46.624,0,0,0-6.187-23.562q-6.187-10.812-18.312-19.437Zm-52.25-104-34.125-22.75,129.625,13.75q35.5,3.875,56,25.188t20.5,54.438q0,41.25-29.187,65.063T1425.875-1.75l-92.75,6.125,53.875-20Z" transform="translate(32.36 425.18)" fill="none" stroke="#fff" stroke-width="11"/>
    </g>
    <g transform="matrix(1, 0, 0, 1, 159.64, 1071.82)" filter="url(#Path_3)">
      <path id="Path_3-2" data-name="Path 3" d="M495.665-210.868H633.434q35.79,0,56.241,18.033t20.451,45.117q0,29.848-24.044,46.706c22.754,25.979,82.15,63.1,86.572,104.467H658.4C656.65-23.169,624.244-46.292,618.026-59s-15.914-19.069-29.088-19.069V0H495.665Zm93.274,43.39v40.626h2.625q25.149,0,25.149-19.76a22.431,22.431,0,0,0-5.113-14.578q-5.113-6.287-17-6.287ZM849.276,3.455q-45.186,0-76.623-31.713t-31.437-77.314q0-45.462,31.437-77.037t76.623-31.575q45.324,0,76.761,31.575t31.437,77.037q0,45.6-31.437,77.314T849.276,3.455Zm0-136.8a19.671,19.671,0,0,0-14.924,6.287,22.126,22.126,0,0,0-5.942,15.822,22.126,22.126,0,0,0,5.942,15.822,19.67,19.67,0,0,0,14.924,6.287,19.831,19.831,0,0,0,15.062-6.287,22.126,22.126,0,0,0,5.942-15.822,22.126,22.126,0,0,0-5.942-15.822A19.831,19.831,0,0,0,849.276-133.347Z" transform="translate(325.36 239.18)" fill="url(#linear-gradient)"/>
    </g>
  </g>
                </svg>
      <Link to='/afroweekend'><button>ORDER NOW</button></Link>
                </p>: <p className='hero_message' ref={hero_message}>
                Discover culinary excellence where each dish is a masterpiece, and every bite a symphony of flavors.
                 Indulge in a dining experience that transcends mere satisfaction.
                </p>}
                
               
   

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
          {/*}
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


            </div>*/}
            
        
        </div>


    </div>
    {/*< Services />
    <MenusList />*/}
    </>
  )
}
