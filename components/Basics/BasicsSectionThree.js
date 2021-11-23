import React from 'react'
import Link from 'next/link'

function BasicsSectionThree () {
  return (
    <div className='basicsSectionThree '>
      <div className='container'>
        <div className='row'>
          <h2>Latest articles</h2>
        </div>
        <div className='row articles'>
          <div className='article'>
            <div className='purple-box'></div>
            <span>Article title</span>
          </div>
          <div className='article'>
            <div className='purple-box'></div>
            <span>Article title</span>
          </div>
          <div className='article'>
            <div className='purple-box'></div>
            <span>Article title</span>
          </div>
          <div className='article'>
            <div className='purple-box'></div>
            <span>Article title</span>
          </div>
        </div>
        <div className='button'>
          <Link href='/essentials'>
            <a className='btn btn-black'>See all articles</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BasicsSectionThree
