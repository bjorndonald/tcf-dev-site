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
import { articles_array } from './articles'
import { icons_data } from './icons'

function array_move (arr, old_index, new_index) {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1
    while (k--) {
      arr.push(undefined)
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0])
  return arr // for testing
}

function ArticlesSectionTwo (props) {
  const router = useRouter()
  const [articles, setArticles] = useState([])
  const [articleSections, setarticleSections] = useState([])
  const [collection, setCollection] = useState([])
  var name
  useEffect(() => {
    var all_articles = {}
    var section_articles = []
    var sections = []
    var coll_sections = []
    var url_string = window.location.href //window.location.href
    var url = new URL(url_string)
    var collection = {}
    name = url.searchParams.get('name')
    var test_arr = []

    if (articles_array[name]) {
      articles_array[name].map(section => {
        var tmp = {}
        sections.push(section)
        props.articles.data.map(article => {
          if (article.parent_id == section.id) section_articles.push(article)
        })
        tmp['No_section'] = section_articles
        all_articles[section.name] = tmp
        section_articles = []
      })

      articles_array[name].map(section => {
        props.sections.data.map(sect => {
          if (sect.parent_id == section.id) {
            props.articles.data.map(article => {
              if (article.parent_id == sect.id) section_articles.push(article)
            })
            all_articles[section.name][sect.name] = section_articles
            section_articles = []
          }
        })
      })
      // sections.push(...coll_sections)
      // console.log(coll_sections)
      // articles_array[name].map(section => {
      //   coll_sections.map(coll_section => {

      //   })
      // })

      // console.log(all_articles)

      collection = props.collections.data.find(
        coll => coll.id == router.query.id
      )
    }
    console.log(collection)
    setCollection(collection)
    setarticleSections(sections)
    setArticles(all_articles)
    console.log(sections)
    console.log(all_articles)
    return () => {}
  }, [])
  return (
    <div className='articlesSectionTwo py-5 d-flex  '>
      <div className='container '>
        <div className='row mt-5'>
          <nav aria-label='breadcrumb'>
            <ol class='breadcrumb'>
              <li class='breadcrumb-item'>
                <Link href='/help-center'>Home</Link>
              </li>
              {router.query.parent == 'Tokens' ? null : (
                <li class='breadcrumb-item'>
                  <Link
                    href={{
                      pathname: '/help-center/sections',
                      query: {
                        name: router.query.parent
                      }
                    }}
                  >
                    <a>{router.query.parent}</a>
                  </Link>
                </li>
              )}

              <li class='breadcrumb-item'>
                <a>{router.query.name}</a>
              </li>
            </ol>
          </nav>
        </div>
        <div className='row col-12 body'>
          {router.query.name ? (
            <Fragment>
              <Tab.Container defaultActiveKey={'0'}>
                <div className='col-md-3'>
                  <Nav>
                    {articleSections.map((section, index) => (
                      <Nav.Item>
                        <Nav.Link eventKey={index}>{section.name}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </div>

                <div
                  className='col-md-8 py-4 mb-5'
                  style={{ backgroundColor: '#f3f5f7', borderRadius: 5 }}
                >
                  <Tab.Content>
                    {articleSections.map((section, index) => (
                      <Tab.Pane eventKey={index}>
                        {/* <p>Articles</p> */}
                        <div className='row collection-header d-flex align-items-center mb-3'>
                          <div className='col-md-2 d-flex align-items-center justify-content-center'>
                            {section == undefined
                              ? null
                              : icons_data[section.icon]}
                          </div>
                          <div className='col-md-10'>
                            <h1>{section.name}</h1>
                            <h5>
                              {section == undefined
                                ? null
                                : section.description}
                            </h5>
                          </div>
                        </div>

                        {section.name == 'Monthly Plans' ||
                        section.name == 'One Time Fee Plan'
                          ? array_move(
                              Object.keys(articles[section.name]),
                              2,
                              1
                            ).map(coll_section => {
                              return (
                                <Fragment>
                                  {coll_section == 'No_section' ? null : (
                                    <h3 className='mb-1 mt-5'>
                                      {coll_section}
                                    </h3>
                                  )}

                                  {articles[section.name][coll_section].map(
                                    article => {
                                      return (
                                        <Link
                                          href={{
                                            pathname: '/help-center/article/',
                                            query: {
                                              id: article.id,
                                              name: article.title,
                                              parent: router.query.name,
                                              grandparent: router.query.parent
                                            }
                                          }}
                                        >
                                          <div className='article shadow-sm p-3 bg-white rounded'>
                                            <h4>{article.title}</h4>
                                            <h5>{article.description}</h5>
                                          </div>
                                        </Link>
                                      )
                                    }
                                  )}
                                </Fragment>
                              )
                            })
                          : Object.keys(articles[section.name]).map(
                              coll_section => {
                                return (
                                  <Fragment>
                                    {coll_section == 'No_section' ? null : (
                                      <h3 className='mb-1 mt-5'>
                                        {coll_section}
                                      </h3>
                                    )}

                                    {articles[section.name][coll_section]
                                      .reverse()
                                      .map(article => {
                                        return (
                                          <Link
                                            href={{
                                              pathname: '/help-center/article/',
                                              query: {
                                                id: article.id,
                                                name: article.title,
                                                parent: router.query.name,
                                                grandparent: router.query.parent
                                              }
                                            }}
                                          >
                                            <div className='article shadow-sm p-3 bg-white rounded'>
                                              <h4>{article.title}</h4>
                                              <h5>{article.description}</h5>
                                            </div>
                                          </Link>
                                        )
                                      })}
                                  </Fragment>
                                )
                              }
                            )}
                        {/* {array_move(
                          Object.keys(articles[section.name]),
                          2,
                          1
                        ).map(coll_section => {
                          return (
                            <Fragment>
                              {coll_section == 'No_section' ? null : (
                                <h3 className='mb-1 mt-5'>{coll_section}</h3>
                              )}

                              {articles[section.name][coll_section].map(
                                article => {
                                  return (
                                    <Link
                                      href={{
                                        pathname: '/help-center/article/',
                                        query: {
                                          id: article.id,
                                          name: article.title,
                                          parent: router.query.name,
                                          grandparent: router.query.parent
                                        }
                                      }}
                                    >
                                      <div className='article shadow-sm p-3 bg-white rounded'>
                                        <h4>{article.title}</h4>
                                        <h5>{article.description}</h5>
                                      </div>
                                    </Link>
                                  )
                                }
                              )}
                            </Fragment>
                          )
                        })} */}
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </div>
              </Tab.Container>
            </Fragment>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default ArticlesSectionTwo
