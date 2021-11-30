import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loading () {
  return (
    <div className='loading-section'>
      <Spinner animation='border' />
    </div>
  )
}

export default Loading
