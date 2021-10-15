import React, { useState } from 'react'
import $ from 'jquery'

function SignUpSectionOne (props) {
  const [stage, setStage] = useState('one')
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

            <div className='form-group mb-3'>
              <label htmlFor='first'>First Name</label>
              <div className='textWrapper'>
                <input type='text' id='first' />
              </div>
            </div>

            <div className='form-group mb-3'>
              <label htmlFor='last'>Last Name</label>
              <div className='textWrapper'>
                <input type='text' id='last' />
              </div>
            </div>

            <div className='form-group mb-3'>
              <label htmlFor='last'>Last Name</label>
              <div className='textWrapper'>
                <input type='text' id='last' />
              </div>
            </div>

            <div className='form-group mb-3'>
              <label htmlFor='email'>Email Address</label>
              <div className='textWrapper'>
                <input type='text' id='email' />
              </div>
            </div>

            <div className='form-group mb-3'>
              <label htmlFor='password'>Password</label>
              <div className='textWrapper'>
                <input type='password' id='password' />
                <a onClick={e => showPassword(e)}>
                  <i className='fa fa-eye-slash'></i>
                </a>
              </div>
            </div>

            <p className='d-flex align-items-start justify-content-center'>
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
              <a href='' className='btn btn-black'>
                Sign up
              </a>
            </div>

            <div className='links'>
              <a href='' className='link'>
                Already have an account?
              </a>
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
              <div className='form-group mb-3'>
                <label htmlFor='first'>First Name</label>
                <div className='textWrapper'>
                  <input type='text' id='first' />
                </div>
              </div>

              <div className='form-group mb-3'>
                <label htmlFor='last'>Last Name</label>
                <div className='textWrapper'>
                  <input type='text' id='last' />
                </div>
              </div>
            </div>

            <div className='form-group mb-3'>
              <label htmlFor='last'>Last Name</label>
              <div className='textWrapper'>
                <input type='text' id='last' />
              </div>
            </div>

            <div className='form-group mb-3'>
              <label htmlFor='email'>Email Address</label>
              <div className='textWrapper'>
                <input type='text' id='email' />
              </div>
            </div>

            <div className='form-group mb-3'>
              <label htmlFor='password'>Password</label>
              <div className='textWrapper'>
                <input type='password' id='password' />
                <a onClick={e => showPassword(e)}>
                  <i className='fa fa-eye-slash'></i>
                </a>
              </div>
            </div>

            <p className='d-flex align-items-start justify-content-center'>
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
              <a href='' className='btn btn-black'>
                Sign up
              </a>
            </div>

            <div className='links'>
              <a href='' className='link'>
                Already have an account?
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpSectionOne
