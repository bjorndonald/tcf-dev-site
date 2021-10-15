import React, { useState } from 'react'
import $ from 'jquery'

function LoginSectionOne () {
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
      <div className='loginSectionOne mobile'>
        {stage == 'one' ? (
          <div className='first-inner'>
            <div className='top-row d-flex align-items-center justify-content-center'>
              <img src='/images/login/tc_logo.png' alt='' />
              <h2>
                Traders
                <br />
                Central
              </h2>
            </div>
            <img
              src='/images/login/login_graphic.jpg'
              className='graphic'
              alt=''
            />
            <div className='buttons'>
              <a onClick={() => setStage('two')} className='btn btn-black'>
                Login
              </a>
              <a href='' className='btn btn-black'>
                Sign up
              </a>
            </div>
          </div>
        ) : stage == 'two' ? (
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
                <label htmlFor='email'>Email or TC tag</label>
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

              <div className='button'>
                <a className='btn btn-black'>Login</a>
              </div>

              <div className='row justify-content-center mt-4 mb-1'>
                <a href='' className='link'>
                  Forgot my password
                </a>
              </div>
              <div className='row justify-content-center'>
                <a
                  href='https://fund.traderscentral.com/sign-up'
                  className='link'
                >
                  Sign-up
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className='loginSectionOne web'>
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

            <div className='form-group mb-3'>
              <label htmlFor='email'>Email or TC tag</label>
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

            <div className='button'>
              <a href='' className='btn btn-black'>
                Login
              </a>
            </div>

            <div className='row justify-content-center mt-4 mb-1'>
              <a href='' className='link'>
                Forgot my password
              </a>
            </div>
            <div className='row justify-content-center'>
              <a
                href='https://fund.traderscentral.com/sign-up'
                className='link'
              >
                Sign-up
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginSectionOne
