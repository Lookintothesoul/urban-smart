const initState = {
  username: '',
}

export const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_USERNAME': {
      return { username: action.payload }
    }

    default:
      return state
  }
}
