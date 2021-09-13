import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap/dist/gsap'
import { useRouter } from 'next/dist/client/router'
import { sections_array } from './sections'

function FundSectionTwo (props) {
  const router = useRouter()
  console.log(sections_array[router.query.name])

  return (
    <div className='helpCenterSectionTwo py-5 d-flex align-items-center heightHv'>
      <div className='container '>
        <div className='row mt-5'>
          <nav aria-label='breadcrumb'>
            <ol class='breadcrumb'>
              <li class='breadcrumb-item'>
                <Link href='/help-center'>Home</Link>
              </li>
              <li class='breadcrumb-item'>
                <a href='#'>{router.query.name}</a>
              </li>
              {/*
              <li class='breadcrumb-item active' aria-current='page'>
                Data
              </li> */}
            </ol>
          </nav>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='sectionTitleWrap text-center mb-4'>
              <h2>{router.query.name}</h2>
            </div>
          </div>
        </div>
        <div
          style={{ margin: 'auto' }}
          className='row col-12 eyntkBoxs d-flex align-items-stretch justify-content-center'
        >
          {sections_array[router.query.name] == null
            ? null
            : sections_array[router.query.name].map(post => {
                return (
                  <Link
                    href={{
                      pathname: '/help-center/articles',
                      query: {
                        name: post.name,
                        id: post.id,
                        parent: router.query.name
                      }
                    }}
                  >
                    <div className='col-10 col-md-5 d-flex justify-content-center'>
                      <div className='eyntkBox eyntkBoxOne'>
                        <div className='background'></div>
                        <h3 className='mb-4'>{post.name}</h3>

                        <p>{post.description}</p>
                      </div>
                    </div>
                  </Link>
                )
              })}
        </div>
      </div>
    </div>
  )
}

export default FundSectionTwo
