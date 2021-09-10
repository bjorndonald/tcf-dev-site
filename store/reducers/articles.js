import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { apiCallBegan } from '../api'
import moment from 'moment'

const slice = createSlice({
  name: 'articles',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null
  },
  reducers: {
    articlesRequested: (articles, action) => {
      articles.loading = true
    },
    articlesReceived: (articles, action) => {
      articles.list = action.payload
      articles.loading = false
      articles.lastFetch = Date.now()
    },
    articlesRequestFailed: (articles, action) => {
      articles.loading = false
    }
  }
})

export const {
  articlesReceived,
  articlesRequested,
  articlesRequestFailed
} = slice.actions
export default slice.reducer

const url = '/feed'

export const loadArticles = () => (dispatch, getState) => {
  const { lastFetch } = getState().articles

  const diffInMinutes = moment().diff(moment(lastFetch), 'minutes')
  if (diffInMinutes < 10) return

  dispatch(
    apiCallBegan({
      url: url,
      onStart: articlesRequested.type,
      onSuccess: articlesReceived.type,
      onError: articlesRequestFailed.type
    })
  )
}
