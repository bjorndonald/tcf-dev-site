import React from 'react'

function BasicArticlesSectionOne () {
  return (
    <div className='basicArticlesSectionOne'>
      <div className='container'>
        <h2>Latest articles</h2>
        <div className='d-flex '>
          <div className='article'>
            <img src='/images/basicArticles/basicArticleOne.PNG' alt='' />
          </div>
          <div className='article'>
            <img src='/images/basicArticles/basicArticleTwo.PNG' alt='' />
          </div>
          <div className='article'>
            <img src='/images/basicArticles/basicArticleThree.PNG' alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasicArticlesSectionOne
