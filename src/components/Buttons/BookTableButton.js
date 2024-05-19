import React from 'react'

export default function BookTableButton() {
  return (
    <div>
        <button onClick={console.log('booking table...')} className='book_a_table'>
            Book A Table
        </button>
    </div>
  )
}
