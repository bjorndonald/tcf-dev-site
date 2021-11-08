import React from 'react'
import Article from './Article'

function Articles () {
  return (
    <div className='articles'>
      {[...Array(12).keys()].map((x, i) => (
        <Article />
      ))}
    </div>
  )
}

export default Articles
