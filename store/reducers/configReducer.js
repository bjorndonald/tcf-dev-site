const initState = {
  questions: [
    { id: '1', title: 'help me find peach', content: 'blah blah blah' },
    { id: '2', title: 'collect all the stars', content: 'blah blah blah' },
    { id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah' }
  ],
  timeline: null,
  loading: false
}

const configReducer = (state = initState, action) => {
  switch (action.type) {
    case 'START_ACTION':
      state.loading = true
      return state
    case 'SET_TIMELINE':
      state.loading = false
      state.timeline = action.timeline
      return state
    case 'CLEAR_TIMELINE':
      state.loading = false
      state.timeline = null
      return state
    default:
      return state
  }
}

export default configReducer
