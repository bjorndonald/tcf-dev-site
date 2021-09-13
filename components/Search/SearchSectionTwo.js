import React, { Fragment, useEffect, useState } from 'react'
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

function SearchSectionTwo (props) {
  const router = useRouter()
  const [articles, setArticles] = useState([])
  const [sections, setSections] = useState([])

  useEffect(() => {
    var url_string = window.location.href //window.location.href
    var url = new URL(url_string)
    var name = url.searchParams.get('query')
    var results = {}
    var collections = []
    if (name) {
      props.articles.map((article, index) => {
        if (article.title.toLowerCase().includes(name)) {
          // t.push(article)
          if (article.parent_type == 'section') {
            props.sections.map((section, index) => {
              if (section.id == article.parent_id) {
                props.collections.map((collection, index) => {
                  if (collection.id == section.parent_id) {
                    if (results[collection.name]) {
                      if (!collections.includes(collection.name))
                        collections.push(collection.name)
                      results[collection.name].push(article)
                    } else {
                      if (!collections.includes(collection.name))
                        collections.push(collection.name)
                      results[collection.name] = [article]
                    }
                  }
                })
              }
            })
          } else if (article.parent_type == 'collection') {
            props.collections.map((collection, index) => {
              if (collection.id == article.parent_id) {
                if (results[collection.name]) {
                  if (!collections.includes(collection.name))
                    collections.push(collection.name)
                  results[collection.name].push(article)
                } else {
                  if (!collections.includes(collection.name))
                    collections.push(collection.name)
                  results[collection.name] = [article]
                }
              }
            })
          }
        }
      })
    }

    // console.log(collections)

    setArticles(results)
    setSections(collections)
    return () => {}
  }, [])
  console.log(sections)
  return (
    <div className='searchSectionTwo pb-5 d-flex  '>
      <div className='container '>
        <div className='row col-12 body'>
          <Fragment>
            {sections ? (
              <Tab.Container defaultActiveKey={0}>
                <div className='col-md-3'>
                  <Nav>
                    {sections.map((section, index) => (
                      <Nav.Item>
                        <Nav.Link eventKey={index}>{section}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </div>

                <div
                  className='col-md-8 pt-4 mb-5'
                  style={{ backgroundColor: '#f3f5f7', borderRadius: 5 }}
                >
                  {sections ? (
                    <Tab.Content>
                      {sections.map((section, index) => (
                        <Tab.Pane eventKey={index}>
                          {articles[section].map((article, articleIndex) => (
                            <Link
                              href={{
                                pathname: '/help-center/article/',
                                query: {
                                  id: article.id,
                                  name: article.title,
                                  parent: section
                                }
                              }}
                            >
                              <div className='article shadow-sm p-3 bg-white rounded'>
                                <h4>{article.title}</h4>
                                <h5>{article.description}</h5>
                              </div>
                            </Link>
                          ))}
                          <p
                            className='mt-4'
                            style={{
                              textAlign: 'center',
                              fontWeight: 'normal',
                              color: '#555'
                            }}
                          >
                            End of list
                          </p>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  ) : (
                    <p
                      className='mt-4'
                      style={{
                        textAlign: 'center',
                        fontWeight: 'normal',
                        color: '#555'
                      }}
                    >
                      No results
                    </p>
                  )}
                </div>
              </Tab.Container>
            ) : null}
          </Fragment>
        </div>
      </div>
    </div>
  )
}

export default SearchSectionTwo
