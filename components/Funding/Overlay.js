import { Tooltip } from 'bootstrap'
import React from 'react'
import { OverlayTrigger } from 'react-bootstrap'

function Overlay ({ info }) {
  return (
    <>
      <OverlayTrigger placement={'top'} overlay={<Tooltip>{info}</Tooltip>}>
        <span className='pTableiconWrap'>
          <svg className='pTableicon pTableiconAtive' viewBox='0 0 14 14'>
            <g>
              <path
                d='M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,12.7c-3.2,0-5.7-2.6-5.7-5.7c0-3.2,2.6-5.7,5.7-5.7
                                              s5.7,2.6,5.7,5.7C12.7,10.2,10.2,12.7,7,12.7z'
              ></path>
              <path d='M7,9.8c-0.5,0-0.8,0.4-0.8,0.8c0,0.5,0.4,0.8,0.8,0.8s0.8-0.4,0.8-0.8C7.8,10.1,7.5,9.8,7,9.8z'></path>
              <path
                d='M7,2.5c-1.3,0-2.3,1-2.3,2.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6c0-0.6,0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1S7.6,5.9,7,5.9
                                              c-0.4,0-0.6,0.3-0.6,0.6v1.3c0,0.4,0.3,0.6,0.6,0.6s0.6-0.3,0.6-0.6V7.1c1-0.3,1.7-1.2,1.7-2.2C9.3,3.6,8.3,2.5,7,2.5z'
              ></path>
            </g>
          </svg>

          <svg className='pTableicon pTableiconNotAtive' viewBox='0 0 14 14'>
            <path
              d='M7,0C3.1,0,0,3.1,0,7s3.1,7,7,7s7-3.1,7-7S10.9,0,7,0z M7,11.4c-0.4,0-0.8-0.3-0.8-0.8c0-0.4,0.3-0.8,0.8-0.8
                                          s0.8,0.3,0.8,0.8C7.8,11,7.4,11.4,7,11.4z M7.6,7.1v0.7c0,0.3-0.3,0.6-0.6,0.6S6.4,8.2,6.4,7.8V6.5c0-0.3,0.2-0.6,0.6-0.6
                                          c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1S5.9,4.2,5.9,4.8c0,0.3-0.3,0.6-0.6,0.6S4.7,5.2,4.7,4.8c0-1.3,1-2.3,2.3-2.3
                                          s2.3,1.1,2.3,2.4C9.3,5.9,8.6,6.8,7.6,7.1z'
            ></path>
          </svg>
        </span>
      </OverlayTrigger>
    </>
  )
}

export default Overlay
