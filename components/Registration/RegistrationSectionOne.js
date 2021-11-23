import React, { useState } from 'react'
import CaretRight from './../../icons/CaretRight'
import Curve from './Curve'
import Link from 'next/link'
import EyeSlachIcon from '../../icons/EyeSlachIcon'
import { shallowEqual } from 'react-redux'
import SectionOne from './graphics/SectionOne'
import SectionFour from './graphics/SectionFour'
import SectionFive from './graphics/SectionFive'

function scorePassword (pass) {
  var score = 0
  if (!pass) return score

  // award every unique letter until 5 repetitions
  var letters = new Object()
  for (var i = 0; i < pass.length; i++) {
    letters[pass[i]] = (letters[pass[i]] || 0) + 1
    score += 5.0 / letters[pass[i]]
  }

  // bonus points for mixing it up
  var variations = {
    digits: /\d/.test(pass),
    lower: /[a-z]/.test(pass),
    upper: /[A-Z]/.test(pass),
    nonWords: /\W/.test(pass)
  }

  var variationCount = 0
  for (var check in variations) {
    variationCount += variations[check] == true ? 1 : 0
  }
  score += (variationCount - 1) * 10

  return parseInt(score)
}

function First (props) {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [showPassword, setshowPassword] = useState(false)
  return (
    <div className='first'>
      <div className='form-section'>
        <h1>Get Started</h1>
        <h4>Let's begin your application</h4>
        <form action=''>
          <div className='form-group'>
            <label htmlFor=''>Email or Username</label>
            <div className='formWrapper'>
              <input
                value={email}
                onChange={e => {
                  setEmail(e.target.value)
                }}
                type='text'
              />
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor=''>Password</label>
            <div className='formWrapper'>
              {showPassword ? (
                <input
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value)
                  }}
                  type='type'
                />
              ) : (
                <input
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value)
                  }}
                  type='password'
                />
              )}

              <EyeSlachIcon
                setshowPassword={setshowPassword}
                showPassword={showPassword}
              />
            </div>
          </div>
          {password.length ? (
            <div className='strength-meter'>
              <div className='strength'>
                <div
                  style={{
                    width: `${scorePassword(password)}%`
                  }}
                  className='tracker'
                ></div>
              </div>
              <small>Good Password. For extra security make it longer</small>
            </div>
          ) : null}

          <div
            className='button'
            style={{
              marginTop: '1.5rem'
            }}
          >
            <a
              onClick={e => {
                e.preventDefault()
                props.setSection('two')
              }}
              className='btn btn-blue'
            >
              Submit
            </a>
          </div>

          <p>
            Already a Partner? <a href=''>Log In</a>
          </p>
        </form>
      </div>
      <div className='graphic'>
        <SectionOne />
      </div>
    </div>
  )
}

function Second (props) {
  return (
    <div className='second'>
      <div className='form-section'>
        <h1>Get Started</h1>
        <h4>
          Enter the 6-digit code
          <br />
          sent to your email
        </h4>
        <form action=''>
          <div className='form-group'>
            <label htmlFor=''>Email Your Code</label>
            <div className='formWrapper'>
              <input type='text' />
            </div>
          </div>
          <div className='button'>
            <a
              onClick={e => {
                e.preventDefault()
                console.log(e)
                props.setSection('three')
              }}
              className='btn btn-blue'
            >
              Submit
            </a>
          </div>

          <p>
            Haven't received a code? <a>Resend</a>
          </p>
        </form>
      </div>
      <div className='graphic'>
        <SectionOne />
      </div>
    </div>
  )
}

function Third (props) {
  return (
    <div className='third'>
      <div className='form-section'>
        <h1>
          What is your
          <br />
          full name?
        </h1>

        <form action=''>
          <div className='form-group'>
            <label htmlFor=''>Legal First Name</label>
            <div className='formWrapper'>
              <input type='text' />
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor=''>Legal Last Name</label>
            <div className='formWrapper'>
              <input type='text' />
            </div>
          </div>
          <div className='buttons'>
            <a className='btn btn-transparent'>Back</a>
            <a
              onClick={e => {
                e.preventDefault()
                props.setSection('four')
              }}
              className='btn btn-blue'
            >
              Submit <CaretRight />
            </a>
          </div>

          {/* <p>
            Haven't received a code? <a>Resend</a>
          </p> */}
        </form>
      </div>
      <div className='graphic'>
        <SectionOne />
      </div>
    </div>
  )
}

function Fourth (props) {
  return (
    <div className='third'>
      <div className='form-section'>
        <h1>
          Where are you
          <br />
          from?
        </h1>

        <form action=''>
          <div className='form-group'>
            <label htmlFor=''>Search for your country</label>
            <div className='formWrapper'>
              <i className='fa fa-search'></i>
              <input type='text' />
            </div>
          </div>

          <div className='buttons'>
            <a className='btn btn-transparent'>Back</a>
            <a
              onClick={e => {
                e.preventDefault()
                props.setSection('five')
              }}
              className='btn btn-blue'
            >
              Submit <CaretRight />
            </a>
          </div>

          {/* <p>
            Haven't received a code? <a>Resend</a>
          </p> */}
        </form>
      </div>
      <div className='graphic'>
        <SectionFour />
      </div>
    </div>
  )
}

function Fifth (props) {
  return (
    <div className='fifth'>
      <div className='form-section'>
        <h1>
          Are you above
          <br />
          the age of 18?
        </h1>

        <form action=''>
          <div className='form-group-buttons'>
            <a className='btn btn-black'>Yes</a>
            <a
              onClick={e => {
                e.preventDefault()
                props.setSection('warning')
              }}
              className='btn btn-white'
            >
              No
            </a>
          </div>

          <div className='buttons'>
            <a href='' className='btn btn-transparent'>
              Back
            </a>
            <a
              onClick={e => {
                e.preventDefault()
                props.setSection('six')
              }}
              className='btn btn-blue'
            >
              Submit <CaretRight />
            </a>
          </div>

          {/* <p>
            Haven't received a code? <a>Resend</a>
          </p> */}
        </form>
      </div>
      <div className='graphic'>
        <SectionFive />
      </div>
    </div>
  )
}

function Warning (props) {
  return (
    <div className='warning'>
      <div className='form-section'>
        <h1>
          You need to be
          <br />
          above the age
          <br />
          of 18 to be able to use our services
        </h1>

        <div className='single-button'>
          <a
            onClick={e => {
              e.preventDefault()
              props.setSection('five')
            }}
            className='btn btn-blue'
          >
            Go Back
          </a>
        </div>
      </div>
      <div className='graphic'></div>
    </div>
  )
}

function Sixth (props) {
  return (
    <div className='sixth'>
      <div className='form-section'>
        <h1>
          Is your company
          <br />
          incorporated?
        </h1>

        <form action=''>
          <div className='form-group-buttons'>
            <a href='' className='btn-black'>
              Yes
            </a>
            <a href='' className='btn btn-white'>
              No
            </a>
          </div>

          <p className='justify-content-start'>
            Please mention the name of company.
          </p>

          <div className='form-group'>
            <label htmlFor=''>Registered Company Name</label>
            <div className='formWrapper'>
              <i className='fa fa-search'></i>
              <input type='text' />
            </div>
          </div>

          <div className='buttons'>
            <a href='' className='btn btn-transparent'>
              Back
            </a>
            <a
              onClick={e => {
                e.preventDefault()
                props.setSection('seven')
              }}
              className='btn btn-blue'
            >
              Submit <i className='fas fa-chevron-right'></i>
            </a>
          </div>
        </form>
      </div>
      <div className='graphic'></div>
    </div>
  )
}

function Seventh (props) {
  const [check, setCheck] = useState('one')
  return (
    <div className='seventh'>
      <div className='form-section'>
        <h1>
          Which one of our
          <br />
          services are you
          <br />
          interested in?
        </h1>

        <form action=''>
          <div className='form-wrapper'>
            <input
              type='radio'
              onChange={() => setCheck('one')}
              checked={check === 'one'}
              name='option-1'
              id='option-1'
            />
            <input
              type='radio'
              onChange={() => setCheck('two')}
              checked={check === 'two'}
              name='option-2'
              id='option-2'
            />
            <input
              type='radio'
              onChange={() => setCheck('three')}
              checked={check === 'three'}
              name='option-3'
              id='option-3'
            />
            <label for='option-1' className='option option-1'>
              <div className='dot'></div>
              <span>Prop Fund Setup</span>
            </label>
            <label for='option-2' className='option option-2'>
              <div className='dot'></div>
              <span>Market Making</span>
            </label>
            <label for='option-3' className='option option-3'>
              <div className='dot'></div>
              <span>Portfolio Tracking (for my users)</span>
            </label>
          </div>

          <div className='buttons'>
            <a href='' className='btn btn-transparent'>
              Back
            </a>
            <a
              onClick={e => {
                e.preventDefault()
                props.setSection('eight')
              }}
              className='btn btn-blue'
            >
              Submit <i className='fas fa-chevron-right'></i>
            </a>
          </div>
        </form>
      </div>
      <div className='graphic'></div>
    </div>
  )
}

function Eigth (props) {
  const [check, setCheck] = useState('one')
  return (
    <div className='seventh'>
      <div className='form-section'>
        <h1>
          Which one of our
          <br /> market services are
          <br />
          you interested in?
        </h1>

        <form action=''>
          <div className='form-wrapper'>
            <input
              type='radio'
              onChange={() => setCheck('one')}
              checked={check === 'one'}
              name='option-1'
              id='option-1'
            />
            <input
              type='radio'
              onChange={() => setCheck('two')}
              checked={check === 'two'}
              name='option-2'
              id='option-2'
            />

            <label for='option-1' className='option-row option-1'>
              <div className='dot'></div>
              <span>Demo prop fund (back end bridge)</span>
            </label>
            <label for='option-2' className='option-row option-2'>
              <div className='dot'></div>
              <span>Demo prop fund (front end bridge)</span>
            </label>
          </div>

          <div className='buttons'>
            <a href='' className='btn btn-transparent'>
              Back
            </a>
            <a
              onClick={e => {
                e.preventDefault()
                props.setSection('nine')
              }}
              className='btn btn-blue'
            >
              Submit <i className='fas fa-chevron-right'></i>
            </a>
          </div>
        </form>
      </div>
      <div className='graphic'></div>
    </div>
  )
}

function Volume (props) {
  return (
    <div className='volume'>
      <div className='form-section'>
        <h1>
          What kind of volume
          <br /> (users) will you be
          <br />
          expecting per month?
        </h1>

        <form action=''>
          <div className='form-group'>
            <label htmlFor=''>Volume in Number</label>
            <div className='formWrapper'>
              <input type='text' />
            </div>
          </div>

          <div className='buttons'>
            <a href='' className='btn btn-transparent'>
              Back
            </a>
            <a
              onClick={e => {
                e.preventDefault()
                props.setSection('experience')
              }}
              className='btn btn-blue'
            >
              Submit <i className='fas fa-chevron-right'></i>
            </a>
          </div>
        </form>
      </div>
      <div className='graphic'></div>
    </div>
  )
}

function Experience (props) {
  return (
    <div className='experience'>
      <div className='form-section'>
        <h1>
          Do you have prior
          <br /> experience in
          <br />
          running a prop fund?
        </h1>

        <form action=''>
          <div className='form-group-buttons'>
            <a href='' className='btn-black'>
              Yes
            </a>
            <a href='' className='btn btn-white'>
              No
            </a>
          </div>

          <div className='buttons'>
            <a href='' className='btn btn-transparent'>
              Back
            </a>
            <a
              onClick={e => {
                e.preventDefault()
                props.setSection('nine')
              }}
              className='btn btn-blue'
            >
              Submit <i className='fas fa-chevron-right'></i>
            </a>
          </div>
        </form>
      </div>
      <div className='graphic'></div>
    </div>
  )
}

function Ninth (props) {
  return (
    <div className='ninth'>
      <div className='form-section'>
        <h1>
          Do you have the infrastructure
          <br /> and the means to be able to
          <br /> receive and send money in
          <br /> crypto currencies?
        </h1>

        <form action=''>
          <div className='form-group-buttons'>
            <a href='' className='btn-black'>
              Yes
            </a>
            <a href='' className='btn btn-white'>
              No
            </a>
          </div>

          <div className='buttons'>
            <a href='' className='btn btn-transparent'>
              Back
            </a>
            <a
              onClick={e => {
                e.preventDefault()
                props.setSection('ten')
              }}
              className='btn btn-blue'
            >
              Submit <i className='fas fa-chevron-right'></i>
            </a>
          </div>
        </form>
      </div>
      <div className='graphic'></div>
    </div>
  )
}

function Tenth (props) {
  const [check, setCheck] = useState('one')
  return (
    <div className='tenth'>
      <div className='form-section'>
        <h1>
          Which one of our
          <br /> market services are
          <br />
          you interested in?
        </h1>

        <form action=''>
          <div className='form-wrapper'>
            <input
              type='radio'
              onChange={() => setCheck('one')}
              checked={check === 'one'}
              name='option-1'
              id='option-1'
            />
            <input
              type='radio'
              onChange={() => setCheck('two')}
              checked={check === 'two'}
              name='option-2'
              id='option-2'
            />
            <input
              type='radio'
              onChange={() => setCheck('three')}
              checked={check === 'three'}
              name='option-3'
              id='option-3'
            />
            <input
              type='radio'
              onChange={() => setCheck('four')}
              checked={check === 'four'}
              name='option-4'
              id='option-4'
            />

            <label for='option-1' className='option option-1'>
              <div className='dot'></div>
              <span>US$1000 - US$2000</span>
            </label>
            <label for='option-2' className='option option-2'>
              <div className='dot'></div>
              <span>US$2000 - US$3000</span>
            </label>
            <label for='option-3' className='option option-3'>
              <div className='dot'></div>
              <span>US$2000 - US$3000</span>
            </label>
            <label for='option-4' className='option option-4'>
              <div className='dot'></div>
              <span>US$4000+</span>
            </label>
          </div>

          <div className='buttons'>
            <a href='' className='btn btn-transparent'>
              Back
            </a>
            <a
              onClick={e => {
                e.preventDefault()
                props.setSection('eleven')
              }}
              className='btn btn-blue'
            >
              Submit <i className='fas fa-chevron-right'></i>
            </a>
          </div>
        </form>
      </div>
      <div className='graphic'></div>
    </div>
  )
}

function Eleventh (props) {
  return (
    <div className='eleventh'>
      <div className='form-section'>
        <h1>
          Please list your website
          <br /> and social accounts
          <br />
          of your business:
        </h1>

        <form action=''>
          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor=''>Website:</label>
              <div className='formWrapper'>
                {/* <i className='fa fa-search'></i> */}
                <input type='text' />
              </div>
            </div>

            <div className='form-group'>
              <label htmlFor=''>Facebook:</label>
              <div className='formWrapper'>
                {/* <i className='fa fa-search'></i> */}
                <input type='text' />
              </div>
            </div>
          </div>

          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor=''>Instagram:</label>
              <div className='formWrapper'>
                {/* <i className='fa fa-search'></i> */}
                <input type='text' />
              </div>
            </div>

            <div className='form-group'>
              <label htmlFor=''>Telegram:</label>
              <div className='formWrapper'>
                {/* <i className='fa fa-search'></i> */}
                <input type='text' />
              </div>
            </div>
          </div>

          <div className='buttons'>
            <a href='' className='btn btn-transparent'>
              Back
            </a>
            <a
              onClick={e => {
                e.preventDefault()
                props.setSection('twelve')
              }}
              className='btn btn-blue'
            >
              Submit <i className='fas fa-chevron-right'></i>
            </a>
          </div>
        </form>
      </div>
      <div className='graphic'></div>
    </div>
  )
}

function Twelfth (props) {
  return (
    <div className='twelfth'>
      <div className='form-section'>
        <h1>
          Thank you for your submission. <br />
          You will be contacted by one of
          <br /> our representative within 72
          <br />
          business hours if eligible.
        </h1>

        <form action=''>
          <div className='button'>
            <Link href='/'>
              <a className='btn btn-blue'>Return to Homepage</a>
            </Link>
          </div>
        </form>
      </div>
      <div className='graphic'></div>
    </div>
  )
}

function RegistrationSectionOne (props) {
  const [section, setSection] = useState('one')
  return (
    <div className='registrationSectionOne'>
      <Curve />
      <div className='container'>
        {section == 'one' ? (
          <First setSection={setSection} />
        ) : section == 'two' ? (
          <Second setSection={setSection} />
        ) : section == 'three' ? (
          <Third setSection={setSection} />
        ) : section == 'four' ? (
          <Fourth setSection={setSection} />
        ) : section == 'warning' ? (
          <Warning setSection={setSection} />
        ) : section == 'experience' ? (
          <Experience setSection={setSection} />
        ) : section == 'volume' ? (
          <Volume setSection={setSection} />
        ) : section == 'warning' ? (
          <Warning setSection={setSection} />
        ) : section == 'five' ? (
          <Fifth setSection={setSection} />
        ) : section == 'six' ? (
          <Sixth setSection={setSection} />
        ) : section == 'seven' ? (
          <Seventh setSection={setSection} />
        ) : section == 'eight' ? (
          <Eigth setSection={setSection} />
        ) : section == 'nine' ? (
          <Ninth setSection={setSection} />
        ) : section == 'ten' ? (
          <Tenth setSection={setSection} />
        ) : section == 'eleven' ? (
          <Eleventh setSection={setSection} />
        ) : section == 'twelve' ? (
          <Twelfth setSection={setSection} />
        ) : null}
        {/* <Twelfth /> */}
        <div className='tracker-line'>
          <div className='tracker'></div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationSectionOne
