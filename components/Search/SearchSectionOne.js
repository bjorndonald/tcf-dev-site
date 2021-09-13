import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

function SearchSectionOne () {
  const router = useRouter()
  const [text, setText] = useState('')

  const search = event => {
    if (event.keyCode == '13') router.push('/help-center/search?query=' + text)
  }
  return (
    <div className='searchSectionOne pt-5 d-flex '>
      <div className='container'>
        <div className='row pt-5'>
          <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <Link href='/help-center'>Home</Link>
              </li>
              <li className='breadcrumb-item'>
                <a href='#'>Search</a>
              </li>
            </ol>
          </nav>
        </div>
        <div className='row  justify-content-center'>
          <div className='col-8'>
            <div className=' text-center searchSectionOneTitle'>
              <form action='/help-center/search'>
                <div className='input-group mb-3 searchSearchBox'>
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

export default SearchSectionOne
