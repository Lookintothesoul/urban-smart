import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import './Login.css'

export const LOGIN_VALID_FORM = {
  USERNAME: 'developer21',
  PASSWORD: '123456',
}

const LoginComp = ({ setStateUsername }) => {
  const history = useHistory()

  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const isButtonDisabled =
      username !== LOGIN_VALID_FORM.USERNAME ||
      password !== LOGIN_VALID_FORM.PASSWORD

    setIsButtonDisabled(isButtonDisabled)
  }, [username, password])

  const handlerButtonClick = () => {
    setStateUsername(username)
    history.push('/profile')
  }

  return (
    <div className="App">
      <div className="loginForm">
        <h3>Войдите на сайт</h3>

        <div className="input">
          <input
            placeholder="Логин"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input">
          <input
            type="password"
            placeholder="Пароль"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button disabled={isButtonDisabled} onClick={handlerButtonClick}>
          Войти
        </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setStateUsername: (username) =>
    dispatch({ type: 'SET_USERNAME', payload: username }),
})

export const Login = connect(undefined, mapDispatchToProps)(LoginComp)
