import React, { useEffect } from 'react'
import { connect } from 'react-redux'

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
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts
    }
  }
}

function ArticlesSectionOne (props) {
  // useEffect(() => {
  //   console.log(props.timeline)
  //   props.timeline
  //     .from('.helpCenterSectionOne', {
  //       opacity: 0,
  //       duration: 0.8,
  //       ease: 'easeIn'
  //     })
  //     .from(
  //       '.helpCenterSectionOne .helpCenterSearchBox',
  //       { y: 100, opacity: 0, duration: 0.8, ease: 'easeIn' },
  //       '>-0.5'
  //     )
  //     .from(
  //       '.helpCenterSectionOne .helpCenterSectionOneTitle',
  //       { y: 100, opacity: 0, duration: 0.8, ease: 'easeIn' },
  //       '>-1'
  //     )
  // }, [props.timeline])

  return (
    <div className='articlesSectionOne py-5 d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <nav aria-label='breadcrumb'>
            <ol class='breadcrumb'>
              <li class='breadcrumb-item'>
                <Link href='/help-center'>Home</Link>
              </li>
              <li class='breadcrumb-item'>
                <Link
                  href={{
                    pathname: '/help-center/sections',
                    query: { name: router.query.parent }
                  }}
                >
                  {router.query.parent}
                </Link>
              </li>
              <li class='breadcrumb-item'>
                <Link
                  href={{
                    pathname: '/help-center/sections',
                    query: { name: router.query.name }
                  }}
                >
                  {router.query.name}
                </Link>
              </li>
            </ol>
          </nav>
        </div>
        <div className='row py-5 justify-content-center'>
          <div className='col-8'>
            <div className=' text-center helpCenterSectionOneTitle py-5'>
              <div className='d-flex flex-column align-items-center'>
                <h1>Help Center</h1>
                <h3>Hi there! Let's help you out</h3>
              </div>

              <form>
                <div className='input-group mb-3 helpCenterSearchBox'>
                  <input
                    type='text'
                    className='form-control searchField'
                    placeholder='Type your question'
                    aria-label='Search'
                    aria-describedby='basic-addon1'
                  />
                  <div className='input-group-prepend'>
                    <span className='input-group-text' id='basic-addon1'>
                      Search
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
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

const mapStateToProps = state => ({
  timeline: state.config.timeline
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesSectionOne)
