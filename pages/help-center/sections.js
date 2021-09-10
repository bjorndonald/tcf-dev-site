import React, { Fragment, useEffect } from 'react'
import SectionsSectionOne from '../../components/Sections/SectionsSectionOne'
import SectionsSectionTwo from '../../components/Sections/SectionsSectionTwo'
import MetaTag from '../../components/MetaTag'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { connect } from 'react-redux'
import { clearTimeline, setTimeline } from '../../store/actions/configActions'
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'

export async function getStaticProps () {
  const res = await fetch('https://api.intercom.io/help_center/collections', {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization:
        'Bearer dG9rOjU4YzgxZjE1XzRlMTVfNDJlMV85YjM5XzIzMDRhODA5MDBlYzoxOjA='
    }
  })
  const collections = await res.json()

  // By returning { props: { collections } }, the Blog component
  // will receive `collections` as a prop at build time
  return {
    props: {
      collections
    }
  }
}

function fund (props) {
  return (
    <Fragment>
      <MetaTag title='Help Center' />
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
        <script src='https://code.jquery.com/jquery-3.4.1.min.js'></script>
        <script src='/js/script.js'></script>
      </Head>
      {/* <SectionsSectionOne /> */}
      <SectionsSectionTwo collections={props.collections} />
      {/* <HelpCenterSectionThree />
      <HelpCenterSectionFour />
      <HelpCenterSectionFive /> */}
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  setTimeline: timeline => {
    dispatch(setTimeline(timeline))
  },
  clearTimeline: timeline => {
    dispatch(clearTimeline(timeline))
  }
})

const mapStateToProps = state => {
  return {
    timeline: state.config.timeline,
    loading: state.config.loading
    // ...props
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(fund)
export default fund
