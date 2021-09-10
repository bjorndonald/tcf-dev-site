import React from 'react'
import CheckIcon from '../../icons/CheckIcon'

function Fee (props) {
  return (
    <div className='col-md-4 fee'>
      <div className='card d-flex p-4 flex-column align-items-center'>
        {/* {props.item.image} */}
        <h3 className='mt-2 mb-4'>{props.item.title}</h3>
        <div className='row mb-2 '>
          <CheckIcon />
          <p>{props.item.first}</p>
        </div>
        <div className='row'>
          <CheckIcon />
          <p>{props.item.second}</p>
        </div>
        <div className='line'></div>
        <div className='row'>
          <p className='mb-2'>
            <span>Min: </span>
            {props.item.min}
          </p>
        </div>
        <div className='row'>
          <p>
            <span>Max: </span>
            {props.item.max}
          </p>
        </div>

        <div className='line'></div>
        <div className='row'>
          <b>{props.item.description}</b>
        </div>
      </div>
    </div>
  )
}

export default Fee
