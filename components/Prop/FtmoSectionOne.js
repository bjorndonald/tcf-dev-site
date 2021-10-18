import React from 'react'
import BottomTable from './BottomTable'
import TopTable from './TopTable'

function FtmoSectionOne () {
  return (
    <div className='ftmoSectionOne'>
      <div className='container'>
        <div className='text-center'>
          <h2 className='web'>The Prop Trading vs Traders Central Fund</h2>
          <h2 className='mobile'>The Prop Trading Vs TCF</h2>
        </div>

        <TopTable />

        <h4>Challenge Model Comparison</h4>

        <BottomTable />

        {/* <div className='button'>
          <a
            href='https://www.traderscentral.com/products/funding'
            className='btn btn-black'
          >
            Learn more
          </a>
        </div> */}
      </div>
    </div>
  )
}

export default FtmoSectionOne
