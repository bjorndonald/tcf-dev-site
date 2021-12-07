import axios from 'axios'
import * as actions from '../api'
import $ from 'jquery'

const api = ({ dispatch }) => next => async action => {
  if (action.type !== actions.apiCallBegan.type) {
    return next(action)
  }

  const { url, method, data, onStart, onSuccess, onError } = action.payload
  if (onStart) dispatch({ type: onStart })
  const baseURL =
    'https://headerng.herokuapp.com/https://api.traderscentral.capital/'
  next(action)
  if (url == '/feed') {
    try {
      var articles = []

      fetch('https://headerng.herokuapp.com/https://shauntcf.medium.com/feed')
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
        .then(data => {
          $(data)
            .find('item')
            .each((i, item) => {
              var article = {}
              console.log(item)
              article.title = $(item)
                .find('title')
                .text()
              article.link = $(item)
                .find('link')
                .text()

              var temp = Array.from($(item)[0].children).find(
                x => x.nodeName == 'content:encoded'
              ).innerHTML
              article.description = ''
              Array.from($(temp))
                .filter(x => x.nodeName == 'P')
                .forEach(desc => {
                  article.description =
                    article.description + ' ' + desc.innerText
                })

              // console.log(article.description)

              var tempImage = Array.from($(temp)).find(
                x => x.nodeName == 'FIGURE'
              )
              article.image = (
                <img
                  src={$(tempImage)
                    .find('img')
                    .attr('src')}
                  alt={article.title}
                />
              )

              articles.push(article)
            })
        })
        .then(() => {
          // General
          dispatch(actions.apiCallSuccess(articles))
          // Specific
          if (onSuccess) dispatch({ type: onSuccess, payload: articles })
        })
    } catch (error) {
      // General
      dispatch(actions.apiCallFailed(error.message))
      // Specific
      if (onError) dispatch({ type: onError, payload: error.message })
    }
  } else {
    try {
      const response = await axios.request({
        baseURL,
        url,
        headers: {
          'Content-Type': 'application/json'
        },
        method,
        data
      })
      console.log(response.data)
      if (response.data.status == 'success') {
        dispatch(actions.apiCallSuccess(response.data?.data))
        if (url == '/auth/varifiyEmail') {
          if (onSuccess)
            dispatch({ type: onSuccess, payload: response.data?.user_id })
        } else if (onSuccess)
          dispatch({ type: onSuccess, payload: response.data?.data })
      }
      if (response.data.status == 'error') {
        dispatch(actions.apiCallFailed(response.data.message))

        if (onError) dispatch({ type: onError, payload: response.data.message })
      }
    } catch (error) {
      console.log(error)
      dispatch({ type: onError, payload: 'Server error. Please try again.' })
      // General
    }
  }
}

export default api
