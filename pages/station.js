import React, { Fragment } from 'react'
import MetaTag from './../components/MetaTag'
import StationSectionOne from './../components/Station/StationSectionOne'
import StationSectionTwo from './../components/Station/StationSectionTwo'
import StationSectionThree from './../components/Station/StationSectionThree'
import StationSectionFour from './../components/Station/StationSectionFour'
import StationSectionFive from './../components/Station/StationSectionFive'
import StationSectionSix from './../components/Station/StationSectionSix'
import StationSectionSeven from './../components/Station/StationSectionSeven'
import Head from 'next/head'

export default function station () {
  return (
    <Fragment>
      <MetaTag title='Station' />
      <Head>
        <script
          src='https://code.jquery.com/jquery-3.2.1.slim.min.js'
          integrity='sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN'
          crossOrigin='anonymous'
        ></script>
        <script
          src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'
          integrity='sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q'
          crossOrigin='anonymous'
        ></script>
        <script
          src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'
          integrity='sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl'
          crossOrigin='anonymous'
        ></script>
        {/* <script src='https://code.jquery.com/jquery-3.4.1.min.js'></script> */}
        <script src='/js/script.js'></script>
      </Head>
      <StationSectionOne />
      {/* <StationSectionTwo />
      <StationSectionThree />
      <StationSectionFour />
      <StationSectionFive />
      <StationSectionSix />
      <StationSectionSeven /> */}
    </Fragment>
  )
}
