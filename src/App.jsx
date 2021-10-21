import React from 'react'
import { Provider } from 'react-redux'

import { store } from './store/store'
import { AppRoutes } from './components/AppRoutes/AppRoutes'

export const App = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  )
}
