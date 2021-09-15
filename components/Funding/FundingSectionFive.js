import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import $ from 'jquery'
import countries from './countries.json'
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false
})
import { gsap } from 'gsap/dist/gsap'

export default function FundingSectionFive () {
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [country, setCountry] = useState('')

  useEffect(() => {
    $('.custom-select-box').each(function () {
      var $this = $(this),
        selectOptions = $(this).children('option').length

      $this.addClass('hide-select')

      $this.wrap('<div class="select"></div>')
      $this.after('<div class="custom-select-bx"></div>')
      $('div.select').append('<div class="arrow-right"></div>')
      var $customSelect = $this.next('div.custom-select-bx')
      $customSelect.text(
        $this
          .children('option')
          .eq(0)
          .text()
      )

      $customSelect.append('<div class="arrow-down"></div>')

      var $optionlist = $('<ul />', {
        class: 'select-options'
      }).insertAfter($customSelect)

      for (var i = 0; i < selectOptions; i++) {
        $('<li />', {
          text: $this
            .children('option')
            .eq(i)
            .text(),
          rel: $this
            .children('option')
            .eq(i)
            .val()
        }).appendTo($optionlist)
      }

      var $optionlistItems = $optionlist.children('li')

      $customSelect.on('click', function (e) {
        e.stopPropagation()

        $('div.custom-select-bx.active')
          .not(this)
          .each(function () {
            $(this)
              .removeClass('active')
              .next('ul.select-options')

              .hide()
          })
        $(this)
          .toggleClass('active')
          .next('ul.select-options')

          .show()
      })

      $optionlistItems.click(function (e) {
        e.stopPropagation()
        $(this)
          .parent()
          .find('li')
          .removeClass('active')
        $(this).addClass('active')
        $customSelect.text($(this).text()).removeClass('active')
        $this.val($(this).attr('rel'))
        console.log($this.val())
        $optionlist.hide()
      })

      $(document).click(function () {
        $customSelect.removeClass('active')
        $optionlist.hide()
      })
    })
    return () => {}
  }, [])
  // useEffect(() => {
  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".fundingSectionFour",
  //       start: "top 150px",
  //       end: "bottom center",
  //       scrub: 1,
  //       pin:true
  //     }
  //   })
  //   .add("start")
  //   .from(".fundingSectionFour .sectionTitleWrap", { x: 50, opacity : 0 }, "start")
  //   .from(".fundingSectionFour .gaspSlideRight", { x: -50, opacity : 0 }, "start");

  // }, [tl]);

  const submitData = () => {
    var value = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      country: $('.fCountry').val(),
      password: password
    }

    let formData = new FormData()
    formData.append('first_name', value.first_name)
    formData.append('last_name', value.last_name)
    formData.append('email', value.email)
    formData.append('country', value.country)
    formData.append('password', value.password)
    fetch(
      'https://headerng.herokuapp.com/https://fund.traderscentral.com/auth/createAccount',
      {
        method: 'POST', // or 'PUT'
        headers: {},
        body: formData
      }
    )
      .then(response => response.json())
      .then(data => {
        console.log(data)
        window.open(data.data.redirect, 'portal')
      })
      .catch(error => {
        // console.error('Error:', error)
      })
  }
  return (
    <div
      style={{ marginTop: '20vh' }}
      className='sectionContactUs py-5 d-flex align-items-center heightHv'
    >
      <div className='container'>
        <div className='row flex-column align-items-center'>
          <div className='col-12'>
            <div className='contactUsH py-5 sectionTitleWrap'>
              <h2>Let&apos;s get you funded</h2>
            </div>
          </div>

          <div className='col-md-6 gaspSlideRight'>
            <div className='contactUsFormWrapper p'>
              <form onSubmit={submitData}>
                <div className='nameWrap fieldWrap'>
                  <input
                    value={firstName}
                    onChange={e => setfirstName(e.target.value)}
                    type='text'
                    className='fEmail'
                    placeholder='First Name'
                  />
                </div>

                <div className='nameWrap fieldWrap'>
                  <input
                    value={lastName}
                    onChange={e => setlastName(e.target.value)}
                    type='text'
                    className='fEmail'
                    placeholder='Last Name'
                  />
                </div>
                <div className='emailWrap fieldWrap'>
                  <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type='email'
                    className='fEmail'
                    placeholder='Email Address'
                  />
                </div>
                <div className='passWrap fieldWrap'>
                  <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type='password'
                    className='fPass'
                    placeholder='Password'
                  />
                </div>
                <div className='countryWrap fieldWrap'>
                  <select
                    value={country}
                    onChange={e => {
                      console.log(e.target.value)
                      setCountry(e.target.value)
                    }}
                    className='fCountry custom-select-box'
                  >
                    <option>Country</option>
                    {/* <option>Option Two</option>
                    <option>Option three</option> */}
                    {countries.map((x, i) => (
                      <option key={i} value={x}>
                        {x}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='submitWrap fieldWrap'>
                  <a
                    onClick={submitData}
                    className='btn btnSubmit'
                    value='Get Started'
                  >
                    Get Started
                  </a>
                </div>
                <div className='yesCheckBox fieldWrap'>
                  <p className='d-flex align-items-center justify-content-center'>
                    <label className='checkbox-container mr-2'>
                      <input type='checkbox' values='yes' />
                      <span className='checkmark'></span>
                    </label>
                    {/* <input type='checkbox' value='yes' />  */}
                    <span>Send me helpful info.</span>
                  </p>
                </div>
                <div className='fieldWrap'>
                  <p>
                    By clicking &quot;Get started&quot;, you agree to
                    Traderscentral <br />
                    Terms of Use and Privacy Policy.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
