import Head from 'next/head'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/css/tcf-fonts.css'
import '../public/css/tcf-styles.css'
import '../public/css/font-awesome.min.css'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import 'react-awesome-lightbox/build/style.css'
import './../public/css/liquidity.scss'
import './../public/css/aboutus.scss'
import './../public/css/blog.scss'
import './../public/css/crypto.scss'
import './../public/css/token.scss'
import './../public/css/help.scss'
import './../public/css/funding.scss'
import './../public/css/archive.scss'
import './../public/css/basics.scss'
import './../public/css/customers.scss'
import './../public/css/faqs.scss'
import './../public/css/search.scss'
import './../public/css/signup.scss'
import './../public/css/challenge.scss'
import './../public/css/landing.scss'
import './../public/css/login.scss'
import './../public/css/sign-up.scss'
import './../public/css/mobile.scss'
import './../public/css/laptop.scss'
import './../public/css/tablet.scss'
import './../public/css/layout.scss'
import './../public/css/landscape.scss'
import './../public/css/video-controls.scss'

import { Fragment } from 'react'

import { createStore, applyMiddleware } from 'redux'
import rootReducer from './../store/reducers/rootReducer'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import toast from '../store/middleware/toast'
import api from '../store/middleware/api'

// const store = createStore(rootReducer, applyMiddleware(thunk, toast, api))
const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), toast, api]
})

export default function MyApp ({ Component, pageProps }) {
  return (
    <Fragment>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </Fragment>
  )
}
