import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import './Profile.css'

const ProfileComp = ({ username }) => {
  const history = useHistory()

  useEffect(() => {
    if (!username) {
      history.push('/')
    }
  }, [])

  return <div className="profile"><h3>Welcome, {username}!</h3></div>
}

const mapStateToProps = (state) => ({ username: state.username })

export const Profile = connect(mapStateToProps)(ProfileComp)
