import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import Link from 'next/link'
import countries from './countries.json'

function SignUpSectionOne (props) {
  const [stage, setStage] = useState('one')
  useEffect(() => {
    $('.custom-select-box').each(function () {
      var $this = $(this),
        selectOptions = $(this).children('option').length

      $this.addClass('hide-select')

      $this.wrap('<div class="select"></div>')
      $this.after('<div class="custom-select-bx"></div>')
      $('div.select').append(
        '<div class="arrow-right" style="display:none;"></div>'
      )

      var $customSelect = $this.next('div.custom-select-bx')
      $customSelect.text(
        $this
          .children('option')
          .eq(0)
          .text()
      )

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

        $('.select')
          .find('.arrow-right')
          .show()

        if ($('.custom-select-bx').hasClass('active')) {
          $('.select')
            .find('.arrow-right')
            .hide()

          $customSelect.removeClass('active')
          $('.select')
            .find('.arrow-right')
            .hide()
          $optionlist.hide()
        } else {
          $(this)
            .toggleClass('active')
            .next('ul.select-options')
            .show()
        }

        $('div.custom-select-bx.active')
          .not(this)
          .each(function () {
            $(this)
              .removeClass('active')
              .next('ul.select-options')

              .hide()
          })
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
        $('.select')
          .find('.arrow-right')
          .hide()
        $optionlist.hide()
      })
    })
    return () => {}
  }, [])
  const showPassword = event => {
    var $input = $(event.target)
      .parent()

      .parent()
      .find('input')
    var $iconWrapper = $(event.target).parent()
    var $icon = $(event.target)
      .parent()
      .parent()
      .find('i')
    if ($input.prop('type') == 'password') {
      $icon.remove()
      $iconWrapper.append(`<i class='fa fa-eye'></i>`)
      $input.prop('type', 'text')
    } else {
      $icon.remove()
      $iconWrapper.append(`<i class="fa fa-eye-slash"></i>`)
      $input.prop('type', 'password')
    }
  }
  return (
    <>
      <div className='sign-upSectionOne mobile'>
        <div className='second-inner'>
          <div className='login-card'>
            <div className='top-row d-flex align-items-center justify-content-center'>
              <img src='/images/login/tc_logo.png' alt='' />
              <h2>
                Traders
                <br />
                Central
              </h2>
            </div>

            <div className='form-group mb-2'>
              <label htmlFor='first'>First Name</label>
              <div className='textWrapper'>
                <input type='text' id='first' />
              </div>
            </div>

            <div className='form-group mb-2'>
              <label htmlFor='last'>Last Name</label>
              <div className='textWrapper'>
                <input type='text' id='last' />
              </div>
            </div>

            <div className='form-group mb-2'>
              <label htmlFor='email'>Email Address</label>
              <div className='textWrapper'>
                <input type='text' id='email' />
              </div>
            </div>

            <div className='form-group mb-2'>
              <label htmlFor='country'>Country</label>
              <div className='textWrapper'>
                <select
                  onChange={e => {
                    console.log(e.target.value)
                    setCountry(e.target.value)
                  }}
                  className='fCountry custom-select-box'
                >
                  {/* <option>Option Two</option>
                    <option>Option three</option> */}
                  {countries.map((x, i) => (
                    <option key={i} value={x}>
                      {x}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className='form-group mb-2'>
              <label htmlFor='password'>Password</label>
              <div className='textWrapper'>
                <input type='password' id='password' />
                <a onClick={e => showPassword(e)}>
                  <i className='fa fa-eye-slash'></i>
                </a>
              </div>
            </div>

            <p className='d-flex align-items-start justify-content-center mt-3'>
              <label className='checkbox-container mr-2 mt-1'>
                <input type='checkbox' values='yes' />
                <span className='checkmark'></span>
              </label>

              <h6>
                I certify that I am 18 year or older, and agree to the Terms of
                Use and Privacy Policy.
              </h6>
            </p>
            <div className='button'>
              <Link href='/sign-up'>
                <a href='' className='btn btn-black'>
                  Sign up
                </a>
              </Link>
            </div>

            <div className='links'>
              <Link href='/login'>
                <a href='' className='link'>
                  Already have an account?
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='sign-upSectionOne web'>
        <div className='inner'>
          <img
            src='/images/login/login_graphic.jpg'
            className='graphic'
            alt=''
          />
          <div className='login-card'>
            <div className='top-row d-flex align-items-center justify-content-center'>
              <img src='/images/login/tc_logo.png' alt='' />
              <h2>
                Traders
                <br />
                Central
              </h2>
            </div>

            <div className='form-row'>
              <div className='form-group mb-2'>
                <label htmlFor='first'>First Name</label>
                <div className='textWrapper'>
                  <input type='text' id='first' />
                </div>
              </div>

              <div className='form-group mb-2'>
                <label htmlFor='last'>Last Name</label>
                <div className='textWrapper'>
                  <input type='text' id='last' />
                </div>
              </div>
            </div>

            <div className='form-group mb-2'>
              <label htmlFor='email'>Email Address</label>
              <div className='textWrapper'>
                <input type='text' id='email' />
              </div>
            </div>

            <div className='form-group mb-2'>
              <label htmlFor='last'>Country</label>
              <div className='textWrapper'>
                <select
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
            </div>

            <div className='form-group mb-2'>
              <label htmlFor='password'>Password</label>
              <div className='textWrapper'>
                <input type='password' id='password' />
                <a onClick={e => showPassword(e)}>
                  <i className='fa fa-eye-slash'></i>
                </a>
              </div>
            </div>

            <p className='d-flex align-items-start justify-content-center mt-3'>
              <label className='checkbox-container mr-2 mt-1'>
                <input type='checkbox' values='yes' />
                <span className='checkmark'></span>
              </label>

              <h6>
                I certify that I am 18 year or older, and agree to the Terms of
                Use and Privacy Policy.
              </h6>
            </p>
            <div className='button'>
              <Link href='/sign-up'>
                <a href='' className='btn btn-black'>
                  Sign up
                </a>
              </Link>
            </div>

            <div className='links'>
              <Link href='/login'>
                <a href='' className='link'>
                  Already have an account?
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpSectionOne
