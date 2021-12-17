import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { apiCallBegan } from './actions/api'
import moment from 'moment'
import axios from 'axios'

const slice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    onboardingSection: 'one',
    progress: 0,
    user_id: '',
    countries: []
  },
  reducers: {
    authRequested: (auth, action) => {
      auth.loading = true
    },
    authRequestFailed: (auth, action) => {
      auth.loading = false
      alert(action.payload)
    },
    registrationDone: (auth, action) => {
      console.log('done', 'test')
      auth.loading = false
      auth.onboardingSection = 'two'
    },
    verificationCodeSent: (auth, action) => {
      auth.loading = false
    },
    emailVerified: (auth, action) => {
      auth.loading = false
      auth.onboardingSection = 'three'
      auth.user_id = action.payload
      auth.progress = auth.progress + 1
    },
    goBack: (auth, action) => {
      auth.onboardingSection = action.payload
      auth.progress = auth.progress - 1
    },
    legalInfoAdded: (auth, action) => {
      auth.loading = false
      auth.onboardingSection = 'four'
      auth.progress = auth.progress + 1
    },
    countryAdded: (auth, action) => {
      auth.loading = false
      auth.onboardingSection = 'five'
      auth.progress = auth.progress + 1
    },
    ageInfoAdded: (auth, action) => {
      auth.loading = false
      auth.onboardingSection = 'six'
      auth.progress = auth.progress + 1
    },
    warning: (auth, action) => {
      auth.loading = false
      auth.onboardingSection = 'warning'
    },
    companyAdded: (auth, action) => {
      auth.loading = false
      auth.onboardingSection = 'seven'
      auth.progress = auth.progress + 1
    },
    notIncorporated: (auth, action) => {
      auth.loading = false
      auth.onboardingSection = 'seven'
      auth.progress = auth.progress + 1
    },

    servicesAdded: (auth, action) => {
      auth.loading = false
      auth.onboardingSection = action.payload
      auth.progress = auth.progress + 1
    },
    marketServicesAdded: (auth, action) => {
      auth.loading = false
      auth.onboardingSection = 'nine'
      auth.progress = auth.progress + 1
    },
    volumeAdded: (auth, action) => {
      auth.loading = false
      auth.onboardingSection = 'nine'
      auth.progress = auth.progress + 1
    },
    experienceAdded: (auth, action) => {
      auth.loading = false
      auth.onboardingSection = 'nine'
      auth.progress = auth.progress + 1
    },
    infrastructureAdded: (auth, action) => {
      auth.loading = false
      auth.onboardingSection = 'ten'
      auth.progress = auth.progress + 1
    },

    budgetAdded: (auth, action) => {
      auth.loading = false
      auth.onboardingSection = 'eleven'
      auth.progress = auth.progress + 1
    },
    socialsAdded: (auth, action) => {
      auth.loading = false
      auth.onboardingSection = 'twelve'
      auth.progress = auth.progress + 1
    },
    detailsAdded: (auth, action) => {
      auth.loading = false
      console.log('details', action.payload)
      auth.onboardingSection = 'twelve'
      // auth.progress = auth.progress + 1
    },
    countriesReceived: (auth, action) => {
      auth.loading = false

      auth.countries = action.payload
    }
  }
})

export const {
  authRequestFailed,
  emailVerified,
  countriesReceived,
  legalInfoAdded,
  authRequested,
  goBack,
  budgetAdded,
  infrastructureAdded,
  volumeAdded,
  experienceAdded,
  servicesAdded,
  marketServicesAdded,
  registrationDone,
  verificationCodeSent,
  countryAdded,
  ageInfoAdded,
  warning,
  socialsAdded,
  detailsAdded,
  companyAdded,
  notIncorporated
  // legalInfoAdded
} = slice.actions
export default slice.reducer

var BaseURL = 'https://headerng.herokuapp.com/'

export const loadCountries = () => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: '/countries',
      method: 'GET',
      data: {},
      onStart: authRequested.type,
      onSuccess: countriesReceived.type,
      onError: authRequestFailed.type
    })
  )
}

// Registration Action Creators;
export const register = data => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: '/auth/registration',
      method: 'POST',
      data,
      onStart: authRequested.type,
      onSuccess: registrationDone.type,
      onError: authRequestFailed.type
    })
  )
}

// Resend Email Verification code API;
export const sendCode = data => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: '/auth/resendEmailVarificationCode',
      method: 'POST',
      data,
      onStart: authRequested.type,
      onSuccess: verificationCodeSent.type,
      onError: authRequestFailed.type
    })
  )
}

// Verify Email Address API
export const verifyEmail = data => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: '/auth/varifiyEmail',
      method: 'POST',
      data,
      onStart: authRequested.type,
      onSuccess: emailVerified.type,
      onError: authRequestFailed.type
    })
  )
}

// Add additional details to onboarding user API
export const addDetails = data => (dispatch, getState) => {
  var temp = data
  temp.user_id = getState().auth.user_id
  console.log(temp)
  dispatch(
    apiCallBegan({
      url: '/auth/RegistrationAdditionalDetails',
      method: 'POST',
      data: temp,
      onStart: authRequested.type,
      onSuccess: detailsAdded.type,
      onError: authRequestFailed.type
    })
  )
}
