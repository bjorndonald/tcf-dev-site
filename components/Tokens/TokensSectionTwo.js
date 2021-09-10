import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap/dist/gsap'

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

function TokensSectionTwo (props) {
  console.log(props)
  // useEffect(() => {
  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".helpCenterSectionTwo",
  //       start: "top 150px",
  //       end: "bottom center",
  //       scrub: 4,
  //       pin:true
  //     }
  //   })
  //   .add('start')
  //   .from(".helpCenterSectionTwo .sectionTitleWrap", { y: -50, opacity : 0, duration: 0.8 }, 'start')
  //   .from(".helpCenterSectionTwo .eyntkBoxOne", { y: 50, opacity : 0, duration: 0.8 },">-0", 'start')
  //   .from(".helpCenterSectionTwo .eyntkBoxTwo", { y: 50, opacity : 0, duration: 0.8 },">-0.5", 'start')
  //   .from(".helpCenterSectionTwo .eyntkBoxThree", { y: 50, opacity : 0, duration: 0.8 },">-0.5", 'start')
  //   .from(".helpCenterSectionTwo .eyntkBoxFour", { y: 50, opacity : 0, duration: 0.8 },">-0.5", 'start');

  // }, [tl]);

  return (
    <div className='helpCenterSectionTwo py-5 d-flex align-items-center heightHv'>
      <div className='container '>
        <div className='row'>
          <div className='col-12'>
            <div className='sectionTitleWrap text-center mb-4'>
              <h2>Q&A's by product</h2>
            </div>
          </div>
        </div>
        <div
          style={{ margin: 'auto' }}
          className='row col-12 eyntkBoxs d-flex align-items-stretch justify-content-center'
        >
          {/* {props.posts.data
            .filter((x, i) => x.parent_id == props.id)
            .map(post => (
              <div className='col-10 col-md-5 '>
                <div className='eyntkBox eyntkBoxOne'>
                  <h3 className='mb-4'>{post.name}</h3>

                  <p>
                    Learn how to get <br />
                    funded in 24 hrs
                  </p>
                </div>
              </div>
            ))} */}
        </div>
      </div>
    </div>
  )
}

export default TokensSectionTwo
