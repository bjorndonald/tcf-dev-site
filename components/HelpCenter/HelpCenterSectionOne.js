import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

function HelpCenterSectionOne (props) {
  const [text, setText] = useState('')
  const router = useRouter()
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

  const search = event => {
    if (event.keyCode == '13') router.push('/help-center/search?query=' + text)
  }

  return (
    <div className='helpCenterSectionOne py-5 d-flex align-items-center'>
      <div className='container'>
        <div className='row py-5 justify-content-center'>
          <div className='col-8'>
            <div className=' text-center helpCenterSectionOneTitle py-5'>
              <div className='d-flex flex-column align-items-center'>
                <h1>Help Center</h1>
                {/* <h3>Let's help you out</h3> */}
              </div>
              {/*  */}
              <form action='/help-center/search'>
                <div className='input-group mb-3 helpCenterSearchBox'>
                  <input
                    type='text'
                    className='form-control searchField'
                    placeholder='Type your question'
                    aria-label='Search'
                    value={text}
                    name='query'
                    onKeyDown={e => search(e)}
                    onChange={e => setText(e.target.value)}
                    aria-describedby='basic-addon1'
                  />
                  <Link
                    href={{
                      pathname: '/help-center/search',
                      query: { query: text }
                    }}
                  >
                    <div
                      className='input-group-prepend'
                      style={{ cursor: 'pointer' }}
                    >
                      <span className='input-group-text' id='basic-addon1'>
                        Search
                      </span>
                    </div>
                  </Link>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelpCenterSectionOne)
