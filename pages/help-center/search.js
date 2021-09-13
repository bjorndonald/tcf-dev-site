import React, { Fragment, useEffect } from 'react'
import MetaTag from '../../components/MetaTag'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { connect } from 'react-redux'
import { clearTimeline, setTimeline } from '../../store/actions/configActions'
import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'
import SearchSectionOne from '../../components/Search/SearchSectionOne'
import SearchSectionTwo from '../../components/Search/SearchSectionTwo'

export async function getStaticProps () {
  const res = await fetch('https://api.intercom.io/articles?per_page=200', {
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
  const articles = await res.json()

  const collection_res = await fetch(
    'https://api.intercom.io/help_center/collections',
    {
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
    }
  )
  const collections = await collection_res.json()

  const section_res = await fetch(
    'https://api.intercom.io/help_center/sections',
    {
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
    }
  )
  const sections = await section_res.json()

  // By returning { props: { collections } }, the Blog component
  // will receive `collections` as a prop at build time
  return {
    props: {
      articles: articles.data,
      collections: collections.data,
      sections: sections.data
    }
  }
}

function sections (props) {
  return (
    <Fragment>
      <MetaTag title='Search Results' />
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
      <SearchSectionOne />
      <SearchSectionTwo {...props} />
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
  }
}

export default sections
