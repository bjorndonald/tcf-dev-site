import React, { Fragment } from 'react'
import MetaTag from './../../components/MetaTag'

import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function crypto () {
  gsap.registerPlugin(ScrollTrigger)
  let hc_tl = gsap.timeline()

  return (
    <Fragment>
      <MetaTag title='Token page' />
    </Fragment>
  )
}
