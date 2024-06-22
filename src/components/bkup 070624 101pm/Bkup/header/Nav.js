import React from 'react'
import BookTableButton from '../Buttons/BookTableButton'
import {Link, useLocation, useNavigate} from 'react-router-dom'

export default function Nav () {
  const navigate=useNavigate();
  const {pathname} =useLocation();
  return (
    <div className='nav_wrapper'>
        <nav className='top_nav'>
            <div className='nav_drawer'>
              <div className='x'>
              <p className={pathname=='/'?'hide':pathname=='/home'?'hide':pathname=='/react-test'?'hide':''}
               onClick={()=>navigate(-1)}><svg  viewBox="0 0 1024 1024" class="icon" xmlns="http://www.w3.org/2000/svg"><path  d="M224 480h640a32 32 0 110 64H224a32 32 0 010-64z"/><path  d="M237.248 512l265.408 265.344a32 32 0 01-45.312 45.312l-288-288a32 32 0 010-45.312l288-288a32 32 0 1145.312 45.312L237.248 512z"/></svg></p>
              <label htmlFor='drawer'>
            <svg width="57.208" height="29.152" viewBox="0 0 57.208 29.152">
  <g id="Group_2" data-name="Group 2" transform="translate(-115.396 -240.924)">
    <line id="Line_1" data-name="Line 1" x2="57.208" transform="translate(115.396 255.5)" />
    <line id="Line_3" data-name="Line 3" x2="57.208" transform="translate(115.396 242.424)"/>
    <line id="Line_2" data-name="Line 2" x2="42.497" transform="translate(115.396 268.576)"  />
  </g>
</svg></label>
</div>
    <input type='checkbox' id='drawer'/>
    <div className='drawer-b'>
      <ul>
       <Link to='/home'> <li>HOME</li></Link>
      </ul>

    </div>

            </div>
           <Link to='reservation'> <BookTableButton/></Link>

           

        </nav>

    </div>
  )
}
