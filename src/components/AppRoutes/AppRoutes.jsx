import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom'

import { Login } from '../../pages/Login/Login'
import { Profile } from '../../pages/Profile/Profile'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>

        <Route path="/profile" exact>
          <Profile />
        </Route>

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}
