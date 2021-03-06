import React, { Fragment, useEffect } from 'react'
import MetaTag from './../components/MetaTag'
import Head from 'next/head'
import $ from 'jquery'
import ChallengeSectionOne from '../components/Challenge/ChallengeSectionOne'

function challenge () {
  useEffect(() => {
    $('.top-menu').hide()
    $('.site-footer').hide()
    return () => {}
  }, [])
  return (
    <Fragment>
      <MetaTag
        title='Traders Central Fund Giveaway | Traders Central'
        description={``}
      />
      <Head>
        <script
          src='https://code.jquery.com/jquery-3.2.1.min.js'
          integrity='sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4='
          crossorigin='anonymous'
        ></script>
        <script
          type='text/javascript'
          src='//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js'
          async
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
        {/* <script src='/js/video.js'></script> */}
      </Head>
      <ChallengeSectionOne />
    </Fragment>
  )
}

export default challenge
