import React, { useEffect, useState } from 'react'
import CaretRight from './../../icons/CaretRight'
import Curve from './Curve'
import Link from 'next/link'
import EyeSlachIcon from '../../icons/EyeSlachIcon'
import { shallowEqual } from 'react-redux'
import SectionOne from './graphics/SectionOne'
import SectionFour from './graphics/SectionFour'
import SectionEight from './graphics/SectionEight'
import SectionFive from './graphics/SectionFive'
import SectionSeven from './graphics/SectionSeven'
import SectionNine from './graphics/SectionNine'
import SectionLast from './graphics/SectionLast'
import SectionMobileLast from './graphics/SectionMobileLast'
import SectionFourteen from './graphics/SectionFourteen'
import VolumeSection from './graphics/VolumeSection'
import ExperienceSection from './graphics/ExperienceSection'
import SectionThree from './graphics/SectionThree'
import { connect } from 'react-redux'
import $, { data } from 'jquery'
import countries from './countries.json'
import {
  addDetails,
  ageInfoAdded,
  budgetAdded,
  companyAdded,
  countryAdded,
  detailsAdded,
  emailVerified,
  experienceAdded,
  goBack,
  infrastructureAdded,
  legalInfoAdded,
  loadCountries,
  marketServicesAdded,
  notIncorporated,
  register,
  registrationDone,
  sendCode,
  servicesAdded,
  socialsAdded,
  verifyEmail,
  volumeAdded,
  warning
} from '../../store/auth'
import Loading from './../Loading'
import HeadLights from './graphics/HeadLights'
import MobileHeadLights from './graphics/MobileHeadLights'
import MobileCurve from './MobileCurve'

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
                // props.setSection('two')
                props.setData({ email })
                props.register({ email, password })
              }}
              className='btn btn-blue'
            >
              Continue
            </a>
          </div>

          <p>
            Already a Partner?{' '}
            <a href='https://liquidity.traderscentral.com/'>Log In</a>
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
  const [code, setCode] = useState('')
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
            <label htmlFor=''>Enter Your Code</label>
            <div className='formWrapper'>
              <input
                value={code}
                onChange={event => {
                  setCode(event.target.value)
                }}
                type='text'
              />
            </div>
          </div>
          <div className='button'>
            <a
              onClick={e => {
                e.preventDefault()
                console.log(e)
                props.verifyEmail({
                  email: props.data.email,
                  varification_code: code
                })
                // props.setSection('three')
              }}
              className='btn btn-blue'
            >
              Submit
            </a>
          </div>

          <p>
            Haven't received a code?{' '}
            <a
              style={{
                cursor: 'pointer'
              }}
              onClick={() => {
                props.sendCode({ email: props.data.email })
              }}
            >
              Resend
            </a>
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
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [firstNameError, setFirstNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)
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
            <div
              className={firstNameError ? 'formWrapper error' : 'formWrapper'}
            >
              <input
                onChange={e => {
                  setFirstName(e.target.value)
                }}
                value={first_name}
                type='text'
              />
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor=''>Legal Last Name</label>
            <div
              className={lastNameError ? 'formWrapper error' : 'formWrapper'}
            >
              <input
                onChange={e => {
                  setLastName(e.target.value)
                }}
                value={last_name}
                type='text'
              />
            </div>
          </div>
          {firstNameError ? (
            <p className='error'>First name is required.</p>
          ) : null}
          {lastNameError ? (
            <p className='error'>Last name is required.</p>
          ) : null}
          <div className='mobile-tracker-line'>
            <div
              style={{
                width: `${(props.progress / 12) * 100}%`
              }}
              className='tracker'
            ></div>
          </div>
          <div className='buttons'>
            <a
              onClick={() => {
                props.goBack('one')
              }}
              className='btn btn-transparent'
            >
              Back
            </a>
            <a
              onClick={e => {
                e.preventDefault()
                if (first_name.length && last_name.length) {
                  props.setData({ last_name, first_name })
                  props.legalInfoAdded()
                  setFirstNameError(false)
                  setLastNameError(false)
                }
                if (!first_name.length) {
                  setFirstNameError(true)
                  setTimeout(() => {
                    setFirstNameError(false)
                  }, 5000)
                }
                if (!last_name.length) {
                  setLastNameError(true)
                  setTimeout(() => {
                    setLastNameError(false)
                  }, 5000)
                }
                // console.log(props.detailsAdded)
              }}
              className='btn btn-blue'
            >
              Next <CaretRight />
            </a>
          </div>

          {/* <p>
            Haven't received a code? <a>Resend</a>
          </p> */}
        </form>
      </div>
      <div className='graphic'>
        <SectionThree />
      </div>
    </div>
  )
}

function Fourth (props) {
  const [options, setOptions] = useState([])
  const [country, setCountry] = useState('')
  const [countryId, setCountryId] = useState('')
  // const [country, setCountry] = useState("")

  useEffect(() => {
    return () => {}
  }, [])
  function openSearchBox (event) {
    setCountry($(event.target).val())
    if ($(event.target).val().length) {
      var temp = props.countries.filter(country => {
        if (
          country.country_name.toLowerCase().includes(
            $(event.target)
              .val()
              .toLowerCase()
          )
        )
          return country
      })
      setOptions(temp)
      $('.countries-search-list').css('display', 'flex')
    }
  }

  function countrySelect (id) {
    setCountryId(id)
    setCountry(props.countries.find(country => country.id === id).country_name)
    $('.countries-search-list').css('display', 'none')
  }

  return (
    <div className='fourth'>
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
              <input
                value={country}
                onChange={openSearchBox}
                className='search-box'
                type='search'
              />
            </div>

            <ul className='countries-search-list'>
              {options.map((x, i) => (
                <li onClick={() => countrySelect(x.id)} key={i}>
                  {x.country_name}
                </li>
              ))}
            </ul>
          </div>

          <div className='mobile-tracker-line'>
            <div
              style={{
                width: `${(props.progress / 12) * 100}%`
              }}
              className='tracker'
            ></div>
          </div>

          <div className='buttons'>
            <a
              onClick={() => {
                props.goBack('three')
              }}
              className='btn btn-transparent'
            >
              Back
            </a>
            <a
              onClick={e => {
                e.preventDefault()
                if (countryId.length) {
                  props.setData({
                    ...props.data,
                    country_id: parseInt(countryId)
                  })
                  props.countryAdded()
                }
              }}
              className='btn btn-blue'
            >
              Next <CaretRight />
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
  const [answer, setAnswer] = useState(false)
  return (
    <div className='fifth'>
      <div className='form-section'>
        <h1>
          Are you above
          <br />
          <span></span>the age of 18?
        </h1>

        <form action=''>
          <div className='form-group-buttons'>
            <a
              onClick={e => {
                setAnswer(!answer)
                e.preventDefault()
              }}
              className={answer ? 'btn btn-white active' : 'btn btn-white'}
            >
              Yes
            </a>
            <a
              onClick={e => {
                e.preventDefault()
                props.warning()
              }}
              className='btn btn-white'
            >
              No
            </a>
          </div>
          <div className='mobile-tracker-line'>
            <div
              style={{
                width: `${(props.progress / 12) * 100}%`
              }}
              className='tracker'
            ></div>
          </div>
          {answer ? (
            <div className='buttons'>
              <a
                onClick={e => {
                  e.preventDefault()
                  props.goBack('four')
                }}
                href=''
                className='btn btn-transparent'
              >
                Back
              </a>
              <a
                onClick={e => {
                  e.preventDefault()
                  if (answer) {
                    props.setData({ ...props.data, above_eighteen: 1 })
                    props.ageInfoAdded()
                  }
                }}
                className='btn btn-blue'
              >
                Next <CaretRight />
              </a>
            </div>
          ) : null}

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
              props.goBack('five')
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
  const [answer, setAnswer] = useState(false)
  const [company, setCompany] = useState('')
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
            <a
              onClick={e => {
                e.preventDefault()
                setAnswer(!answer)
              }}
              className={answer ? 'btn btn-white active' : 'btn btn-white'}
            >
              Yes
            </a>
            <a
              onClick={e => {
                e.preventDefault()
                props.notIncorporated()
              }}
              className='btn btn-white'
            >
              No
            </a>
          </div>
          {answer ? (
            <>
              <p className='justify-content-start'>
                Please mention the name of company.
              </p>

              <div className='form-group'>
                <label htmlFor=''>Registered Company Name</label>
                <div className='formWrapper'>
                  <i className='fa fa-search'></i>
                  <input
                    value={company}
                    onChange={event => {
                      setCompany(event.target.value)
                    }}
                    type='text'
                    className='pl-2 custom-search-box'
                  />
                </div>
              </div>
            </>
          ) : null}
          <div className='mobile-tracker-line'>
            <div
              style={{
                width: `${(props.progress / 12) * 100}%`
              }}
              className='tracker'
            ></div>
          </div>
          {answer ? (
            <>
              <div className='buttons'>
                <a
                  onClick={e => {
                    e.preventDefault()
                    props.goBack('five')
                  }}
                  className='btn btn-transparent'
                >
                  Back
                </a>
                <a
                  onClick={e => {
                    e.preventDefault()
                    if (answer) {
                      props.setData({
                        ...props.data,
                        is_company_incorporated: 1,
                        company_name: company
                      })
                      props.companyAdded()
                    }
                  }}
                  className='btn btn-blue'
                >
                  Next <CaretRight />
                </a>
              </div>
            </>
          ) : null}
        </form>
      </div>
      <div className='graphic'>
        <SectionSeven />
      </div>
    </div>
  )
}

function Seventh (props) {
  const [firstCheck, setFirstCheck] = useState(false)
  const [secondCheck, setSecondCheck] = useState(false)
  const [thirdCheck, setThirdCheck] = useState(false)

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
              type='checkbox'
              onChange={() => {
                // setThirdCheck(false)
                setSecondCheck(false)
                setFirstCheck(!firstCheck)
              }}
              checked={firstCheck}
              name='option-1'
              id='option-1'
            />
            <input
              type='checkbox'
              onChange={() => {
                setThirdCheck(false)
                setFirstCheck(false)
                setSecondCheck(!secondCheck)
              }}
              checked={secondCheck}
              name='option-2'
              id='option-2'
            />
            <input
              type='checkbox'
              onChange={() => {
                // setFirstCheck(false)
                setSecondCheck(false)
                setThirdCheck(!thirdCheck)
              }}
              checked={thirdCheck}
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

          <div className='mobile-tracker-line'>
            <div
              style={{
                width: `${(props.progress / 12) * 100}%`
              }}
              className='tracker'
            ></div>
          </div>

          <div className='buttons'>
            <a
              onClick={e => {
                e.preventDefault()
                props.goBack('six')
              }}
              className='btn btn-transparent'
            >
              Back
            </a>
            <a
              onClick={e => {
                e.preventDefault()
                console.log('test', firstCheck)
                console.log('test', secondCheck)
                console.log('test', thirdCheck)
                if (secondCheck) {
                  props.setData({
                    ...props.data,
                    interested_services: 'Market Making'
                  })
                  props.servicesAdded('eight')
                }
                if (firstCheck) {
                  props.setData({
                    ...props.data,
                    interested_services: 'Prop Fund Setup'
                  })
                  props.servicesAdded('experience')
                }
                if (firstCheck && thirdCheck) {
                  console.log('test', 'test')
                  props.setData({
                    ...props.data,
                    interested_services:
                      'Prop Fund Setup, Portfolio Tracking (for my users)'
                  })
                  props.servicesAdded('volume')
                }
              }}
              className='btn btn-blue'
            >
              Next <CaretRight />
            </a>
          </div>
        </form>
      </div>
      <div className='graphic'>
        <SectionEight />
      </div>
    </div>
  )
}

function Eigth (props) {
  const [check, setCheck] = useState('')
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
              onChange={() => setCheck('Demo prop fund (back end bridge)')}
              checked={check === 'Demo prop fund (back end bridge)'}
              name='option-1'
              id='option-1'
            />
            <input
              type='radio'
              onChange={() => setCheck('Demo prop fund (front end bridge)')}
              checked={check === 'Demo prop fund (front end bridge)'}
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

          <div className='mobile-tracker-line'>
            <div
              style={{
                width: `${(props.progress / 12) * 100}%`
              }}
              className='tracker'
            ></div>
          </div>

          <div className='buttons'>
            <a
              onClick={e => {
                e.preventDefault()

                props.goBack('seven')
              }}
              className='btn btn-transparent'
            >
              Back
            </a>
            <a
              onClick={e => {
                e.preventDefault()
                if (check.length) {
                  props.setData({
                    ...props.data,
                    market_services: check,
                    per_month_user_volumn: 0,
                    prop_fund_experience: 0
                  })
                  props.marketServicesAdded()
                }
              }}
              className='btn btn-blue'
            >
              Next <CaretRight />
            </a>
          </div>
        </form>
      </div>
      <div className='graphic'>
        <SectionNine />
      </div>
    </div>
  )
}

function Volume (props) {
  const [volume, setVolume] = useState('')
  const [volumeError, setVolumeError] = useState(false)
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
              <input
                value={volume}
                onChange={e => {
                  e.preventDefault()
                  setVolume(e.target.value)
                }}
                type='text'
              />
            </div>
          </div>
          {volumeError ? <p className='error'>Volume is required</p> : null}
          <div className='mobile-tracker-line'>
            <div
              style={{
                width: `${(props.progress / 12) * 100}%`
              }}
              className='tracker'
            ></div>
          </div>
          <div className='buttons'>
            <a
              onClick={e => {
                e.preventDefault()
                props.goBack('seven')
              }}
              className='btn btn-transparent'
            >
              Back
            </a>
            <a
              onClick={e => {
                e.preventDefault()
                if (volume.length) {
                  props.setData({
                    ...props.data,
                    per_month_user_volumn: parseFloat(volume),
                    market_services: '',
                    prop_fund_experience: 0
                  })
                  props.volumeAdded()
                  setVolumeError(false)
                } else {
                  setVolumeError(true)
                  setTimeout(() => {
                    setVolumeError(false)
                  }, 5000)
                }
              }}
              className='btn btn-blue'
            >
              Next <CaretRight />
            </a>
          </div>
        </form>
      </div>
      <div className='graphic'>
        <VolumeSection />
      </div>
    </div>
  )
}

function Experience (props) {
  const [answer, setAnswer] = useState(null)
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
            <a
              onClick={e => {
                e.preventDefault()
                setAnswer(1)
              }}
              className={answer == 1 ? 'btn btn-white active' : 'btn btn-white'}
            >
              Yes
            </a>
            <a
              onClick={e => {
                e.preventDefault()
                setAnswer(0)
              }}
              className={answer == 0 ? 'btn btn-white active' : 'btn btn-white'}
            >
              No
            </a>
          </div>

          <div className='mobile-tracker-line'>
            <div
              style={{
                width: `${(props.progress / 12) * 100}%`
              }}
              className='tracker'
            ></div>
          </div>

          <div className='buttons'>
            <a
              onClick={e => {
                e.preventDefault()
                props.goBack('seven')
              }}
              className='btn btn-transparent'
            >
              Back
            </a>
            <a
              onClick={e => {
                e.preventDefault()
                if (answer != null) {
                  props.setData({
                    ...props.data,
                    prop_fund_experience: answer,
                    market_services: '',
                    per_month_user_volumn: 0
                  })
                  props.experienceAdded()
                }
              }}
              className='btn btn-blue'
            >
              Next <CaretRight />
            </a>
          </div>
        </form>
      </div>
      <div className='graphic'>
        <ExperienceSection />
      </div>
    </div>
  )
}

function Ninth (props) {
  const [answer, setAnswer] = useState(null)
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
            <a
              onClick={e => {
                e.preventDefault()
                setAnswer(answer == 1 ? null : 1)
              }}
              className={answer == 1 ? 'btn btn-white active' : 'btn btn-white'}
            >
              Yes
            </a>
            <a
              onClick={e => {
                e.preventDefault()
                setAnswer(answer == 0 ? null : 0)
              }}
              className={answer == 0 ? 'btn btn-white active' : 'btn btn-white'}
            >
              No
            </a>
          </div>

          <div className='mobile-tracker-line'>
            <div
              style={{
                width: `${(props.progress / 12) * 100}%`
              }}
              className='tracker'
            ></div>
          </div>

          <div className='buttons'>
            <a
              onClick={e => {
                e.preventDefault()
                props.goBack('seven')
              }}
              className='btn btn-transparent'
            >
              Back
            </a>
            <a
              onClick={e => {
                e.preventDefault()
                if (answer != null) {
                  props.setData({
                    ...props.data,
                    able_crypto_transaction: answer
                  })
                  props.infrastructureAdded()
                }
              }}
              className='btn btn-blue'
            >
              Next <CaretRight />
            </a>
          </div>
        </form>
      </div>
      <div className='graphic'>
        <SectionNine />
      </div>
    </div>
  )
}

function Tenth (props) {
  const [budget, setBudget] = useState('')
  return (
    <div className='tenth'>
      <div className='form-section'>
        <h1>
          What is your <br />
          budget?
        </h1>

        <form action=''>
          <div className='form-wrapper'>
            <input
              type='radio'
              onChange={() => setBudget('US$1000 - US$2000')}
              checked={budget === 'US$1000 - US$2000'}
              name='option-1'
              id='option-1'
            />
            <input
              type='radio'
              onChange={() => setBudget('US$2000 - US$3000')}
              checked={budget === 'US$2000 - US$3000'}
              name='option-2'
              id='option-2'
            />
            <input
              type='radio'
              onChange={() => setBudget('US$3000 - US$4000')}
              checked={budget === 'US$3000 - US$4000'}
              name='option-3'
              id='option-3'
            />
            <input
              type='radio'
              onChange={() => setBudget('US$4000+')}
              checked={budget === 'US$4000+'}
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
              <span>US$3000 - US$4000</span>
            </label>
            <label for='option-4' className='option option-4'>
              <div className='dot'></div>
              <span>US$4000+</span>
            </label>
          </div>

          <div className='mobile-tracker-line'>
            <div
              style={{
                width: `${(props.progress / 12) * 100}%`
              }}
              className='tracker'
            ></div>
          </div>

          <div className='buttons'>
            <a
              onClick={e => {
                e.preventDefault()
                props.goBack('nine')
              }}
              className='btn btn-transparent'
            >
              Back
            </a>
            <a
              onClick={e => {
                e.preventDefault()
                if (budget.length) {
                  props.setData({ ...props.data, your_budget: budget })
                  props.budgetAdded('eleven')
                }
              }}
              className='btn btn-blue'
            >
              Next <CaretRight />
            </a>
          </div>
        </form>
      </div>
      <div className='graphic'>
        <SectionNine />
      </div>
    </div>
  )
}

function Eleventh (props) {
  const [website, setWebsite] = useState('')
  const [facebook, setFacebook] = useState('')
  const [instagram, setInstagram] = useState('')
  const [telegram, setTelegram] = useState('')
  const [error, setError] = useState(false)
  const [websiteError, setWebsiteError] = useState(false)
  const [facebookError, setFacebookError] = useState(false)
  const [instagramError, setInstagramError] = useState(false)
  const [telegramError, setTelegramError] = useState(false)
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
                <input
                  type='text'
                  value={website}
                  onChange={e => {
                    e.preventDefault()
                    setWebsite(e.target.value)
                  }}
                />
              </div>
            </div>

            <div className='form-group'>
              <label htmlFor=''>Facebook:</label>
              <div className='formWrapper'>
                {/* <i className='fa fa-search'></i> */}
                <input
                  value={facebook}
                  onChange={e => {
                    e.preventDefault()
                    setFacebook(e.target.value)
                  }}
                  type='text'
                />
              </div>
            </div>
          </div>

          <div className='form-row'>
            <div className='form-group'>
              <label htmlFor=''>Instagram:</label>
              <div className='formWrapper'>
                {/* <i className='fa fa-search'></i> */}
                <input
                  type='text'
                  value={instagram}
                  onChange={e => {
                    e.preventDefault()
                    setInstagram(e.target.value)
                  }}
                />
              </div>
            </div>

            <div className='form-group'>
              <label htmlFor=''>Telegram:</label>
              <div className='formWrapper'>
                {/* <i className='fa fa-search'></i> */}
                <input
                  type='text'
                  value={telegram}
                  onChange={e => {
                    e.preventDefault()
                    setTelegram(e.target.value)
                  }}
                />
              </div>
            </div>
          </div>
          {error ? <p className='error'>All fields are required.</p> : null}
          <div className='mobile-tracker-line'>
            <div
              style={{
                width: `${(props.progress / 12) * 100}%`
              }}
              className='tracker'
            ></div>
          </div>
          <div className='buttons'>
            <a
              onClick={e => {
                e.preventDefault()
                props.goBack('ten')
              }}
              className='btn btn-transparent'
            >
              Back
            </a>
            <a
              onClick={e => {
                e.preventDefault()
                if (
                  website.length &&
                  facebook.length &&
                  instagram.length &&
                  telegram.length
                ) {
                  props.setData({
                    ...props.data,
                    website_url: website,
                    facebook_url: facebook,
                    instagram_url: instagram,
                    telegram: telegram
                  })
                  props.addDetails({
                    ...props.data,
                    website_url: website,
                    facebook_url: facebook,
                    instagram_url: instagram,
                    telegram: telegram
                  })
                  // props.socialsAdded()
                } else {
                  setError(true)
                  setTimeout(() => {
                    setError(false)
                  }, 5000)
                }

                // props.addDetails(props.data)
              }}
              className='btn btn-blue'
            >
              Next <CaretRight />
            </a>
          </div>
        </form>
      </div>
      <div className='graphic'>
        {/* <SectionFourteen /> */}
        <img src='/images/registration/illustration.png' alt='' />
      </div>
    </div>
  )
}

function Twelfth (props) {
  useEffect(() => {
    console.log(props.data)
    return () => {}
  }, [])
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
              <a href='/' className='btn btn-blue'>
                Return to Homepage
              </a>
            </Link>
          </div>
        </form>
      </div>
      <div className='graphic'>
        <div className='mobile'>
          <SectionMobileLast />
        </div>
        <div className='web'>
          <SectionLast />
        </div>
      </div>
      <div className='headlights'>
        <div className='mobile'>
          <MobileHeadLights />
        </div>
        <div className='web'>
          <HeadLights />
        </div>
      </div>
    </div>
  )
}

function RegistrationSectionOne (props) {
  const [section, setSection] = useState('one')
  const [data, setData] = useState({})
  useEffect(() => {
    setSection('one')
    props.loadCountries()
    return () => {}
  }, [])
  return props.loading ? (
    <Loading />
  ) : (
    <div className='registrationSectionOne'>
      <Curve />
      {props.onboardingSection != 'twelve' ? <MobileCurve /> : null}
      <div className='container'>
        {props.onboardingSection == 'one' ? (
          <First {...props} setData={setData} setSection={setSection} />
        ) : props.onboardingSection == 'two' ? (
          <Second
            {...props}
            data={data}
            setData={setData}
            setSection={setSection}
          />
        ) : props.onboardingSection == 'three' ? (
          <Third
            {...props}
            data={data}
            setData={setData}
            setSection={setSection}
          />
        ) : props.onboardingSection == 'four' ? (
          <Fourth
            {...props}
            data={data}
            setData={setData}
            setSection={setSection}
          />
        ) : props.onboardingSection == 'warning' ? (
          <Warning
            {...props}
            data={data}
            setData={setData}
            setSection={setSection}
          />
        ) : props.onboardingSection == 'experience' ? (
          <Experience
            {...props}
            data={data}
            setData={setData}
            setSection={setSection}
          />
        ) : props.onboardingSection == 'volume' ? (
          <Volume
            {...props}
            data={data}
            setData={setData}
            setSection={setSection}
          />
        ) : props.onboardingSection == 'warning' ? (
          <Warning
            {...props}
            data={data}
            setData={setData}
            setSection={setSection}
          />
        ) : props.onboardingSection == 'five' ? (
          <Fifth
            {...props}
            data={data}
            setData={setData}
            setSection={setSection}
          />
        ) : props.onboardingSection == 'six' ? (
          <Sixth
            {...props}
            data={data}
            setData={setData}
            setSection={setSection}
          />
        ) : props.onboardingSection == 'seven' ? (
          <Seventh
            {...props}
            data={data}
            setData={setData}
            setSection={setSection}
          />
        ) : props.onboardingSection == 'eight' ? (
          <Eigth
            {...props}
            data={data}
            setData={setData}
            setSection={setSection}
          />
        ) : props.onboardingSection == 'nine' ? (
          <Ninth
            {...props}
            data={data}
            setData={setData}
            setSection={setSection}
          />
        ) : props.onboardingSection == 'ten' ? (
          <Tenth
            {...props}
            data={data}
            setData={setData}
            setSection={setSection}
          />
        ) : props.onboardingSection == 'eleven' ? (
          <Eleventh
            {...props}
            data={data}
            setData={setData}
            setSection={setSection}
          />
        ) : props.onboardingSection == 'twelve' ? (
          <Twelfth
            {...props}
            data={data}
            setData={setData}
            setSection={setSection}
          />
        ) : null}
        {/* <Twelfth /> */}
        {props.onboardingSection == 'one' ||
        props.onboardingSection == 'twelve' ||
        props.onboardingSection == 'two' ? null : (
          <div className='tracker-line'>
            <div
              style={{
                width: `${(props.progress / 12) * 100}%`
              }}
              className='tracker'
            ></div>
          </div>
        )}
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  register: data => {
    dispatch(register(data))
    // dispatch(registrationDone(data))
  },
  sendCode: data => {
    dispatch(sendCode(data))
  },
  addDetails: data => {
    dispatch(addDetails(data))
  },
  //
  verifyEmail: data => {
    // dispatch(emailVerified(16))
    dispatch(verifyEmail(data))
  },
  legalInfoAdded: () => {
    dispatch(legalInfoAdded())
  },
  countryAdded: () => {
    dispatch(countryAdded())
  },
  warning: () => {
    dispatch(warning())
  },
  ageInfoAdded: () => {
    dispatch(ageInfoAdded())
  },
  companyAdded: () => {
    dispatch(companyAdded())
  },
  notIncorporated: () => {
    dispatch(notIncorporated())
  },
  servicesAdded: target => {
    dispatch(servicesAdded(target))
  },
  marketServicesAdded: () => {
    dispatch(marketServicesAdded())
  },
  volumeAdded: () => {
    dispatch(volumeAdded())
  },
  experienceAdded: () => {
    dispatch(experienceAdded())
  },
  infrastructureAdded: () => {
    dispatch(infrastructureAdded())
  },
  budgetAdded: () => {
    dispatch(budgetAdded())
  },
  socialsAdded: () => {
    dispatch(socialsAdded())
  },
  // experienceAdded: () => {
  //   dispatch(experienceAdded())
  // },
  goBack: target => {
    dispatch(goBack(target))
  },
  loadCountries: () => {
    dispatch(loadCountries())
  }
})

const mapStateToProps = state => ({
  loading: state.auth.loading,
  progress: state.auth.progress,
  countries: state.auth.countries,
  onboardingSection: state.auth.onboardingSection
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationSectionOne)
