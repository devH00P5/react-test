import React from 'react'
import BookTableButton from '../Buttons/BookTableButton'
import {Link} from 'react-router-dom'

export default function Nav () {
  return (
    <div className='nav_wrapper'>
        <nav className='top_nav'>
            <div className='nav_drawer'>
              <label htmlFor='drawer'>
            <svg width="57.208" height="29.152" viewBox="0 0 57.208 29.152">
  <g id="Group_2" data-name="Group 2" transform="translate(-115.396 -240.924)">
    <line id="Line_1" data-name="Line 1" x2="57.208" transform="translate(115.396 255.5)" />
    <line id="Line_3" data-name="Line 3" x2="57.208" transform="translate(115.396 242.424)"/>
    <line id="Line_2" data-name="Line 2" x2="42.497" transform="translate(115.396 268.576)"  />
  </g>
</svg></label>
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
