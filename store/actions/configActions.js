export const setTimeline = timeline => {
  return (dispatch, getState) => {
    // make async call to database

    dispatch({ type: 'SET_TIMELINE', timeline })
  }
}

export const clearTimeline = () => {
  return (dispatch, getState) => {
    // make async call to database
    const state = getState()
    if (state.config.timeline) state.config.timeline.kill()
    dispatch({ type: 'CLEAR_TIMELINE' })
  }
}
