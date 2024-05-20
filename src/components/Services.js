import React from 'react'

import menu1 from '../imgs/burger_8648590.png'
import menu2 from '../imgs/136168132_3c42feb1-9d73-4c03-bcdd-a496e59f4994 (1).png'
import menu3 from '../imgs/136529089_a1e4374c-e98e-4b15-a9ec-a2fe7fc511b9.png'

function Services(props) {
  return (
    <div className='one-pg'>
      <div className="header ht1">
        <h1>
          Our Menu
        </h1>
        <p>
        Making every bite a symphony of flavors
        </p>
        <hr/>
      </div>
        <div className='services_content'>
          <div className='service_img'>

          </div>
          <div className='services_desc' >
            <div className='title'>
              <h2>
              Making every bite a symphony of flavors
              </h2>
              <hr />
              <p>Choose from our available menu </p>

            </div>
            <div className='menus'>
              <div className='menu_card itms_3'>
                <div className='menu_img'>
                  <img src={menu1} alt='menu Item' />

                </div>
                <div className='menu_desc'>
                  <p className='menu_name'>Choose from our available menu </p>
                  <p >£ <span className='price'>50.00</span></p>
                  <p><button>+</button></p>
                  

                </div>

              </div>
              <div className='menu_card itms_3'>
                <div className='menu_img'>
                  <img src={menu2} alt='menu Item' />

                </div>
                <div className='menu_desc'>
                  <p className='menu_name'>Choose from our available menu </p>
                  <p >£ <span className='price'>50.00</span></p>
                  <p><button>+</button></p>
                  

                </div>

              </div>
              <div className='menu_card itms_3'>
                <div className='menu_img'>
                  <img src={menu3} alt='menu Item' />

                </div>
                <div className='menu_desc'>
                  <p className='menu_name'>Choose from our available menu </p>
                  <p >£ <span className='price'>50.00</span></p>
                  <p><button>+</button></p>
                  

                </div>

              </div>

            </div>

            <div className='discover-more'>
              <button>Discover More</button>

            </div>

          </div>

        </div>
        


      
      
    </div>
  )
}

Services.propTypes = {

}

export default Services

