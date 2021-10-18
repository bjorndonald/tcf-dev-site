import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

function TopTable () {
  return (
    <div className='col-12 d-flex  top-table'>
      {' '}
      <div className='pTableSingleListWrap  pTableSingleListWrapRound'>
        <div className='pTableSingleList'>
          <ul>
            <li>
              <h3></h3>
              <h3>The Prop Trading</h3>
              <h3>TCF</h3>
            </li>
            <li>
              <p>Funding Models</p>
              <p>Challenge</p>
              <p>Challenge, Instant Funding</p>
            </li>
            <li>
              <p>Funded Account Type</p>
              <p>Demo</p>
              <p>Live</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TopTable
