import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap/dist/gsap'
import { useRouter } from 'next/dist/client/router'
import {
  Accordion,
  OverlayTrigger,
  Tab,
  Row,
  Col,
  Nav,
  Tooltip,
  Card,
  Button
} from 'react-bootstrap'

function ArticleSectionTwo (props) {
  const router = useRouter()

  var article = props.articles.data.find((x, i) => {
    return x.id == router.query.id
  })
  console.log(article)

  return (
    <div className='articleSectionTwo py-5 d-flex  '>
      <div className='container '>
        <div className='row mt-5'>
          <nav aria-label='breadcrumb'>
            <ol class='breadcrumb'>
              <li class='breadcrumb-item'>
                <Link href='/help-center'>Home</Link>
              </li>
              <li class='breadcrumb-item'>
                <Link
                  href={{
                    pathname: '/help-center/sections',
                    query: {
                      name: router.query.grandparent
                    }
                  }}
                >
                  <a>{router.query.grandparent}</a>
                </Link>
              </li>
              <li class='breadcrumb-item'>
                <Link
                  href={{
                    pathname: '/help-center/articles',
                    query: {
                      parent: router.query.grandparent,
                      name: router.query.parent
                    }
                  }}
                >
                  <a>{router.query.parent}</a>
                </Link>
              </li>
              <li class='breadcrumb-item'>
                <a>{router.query.name}</a>
              </li>
            </ol>
          </nav>
        </div>
        <div className='row article-content col-12 justify-content-center'>
          <div className='col-md-8'>
            <div className='card '>
              {article == null ? null : (
                <>
                  <h1>{article.title}</h1>
                  <div
                    className='body'
                    dangerouslySetInnerHTML={{ __html: article.body }}
                  ></div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleSectionTwo
