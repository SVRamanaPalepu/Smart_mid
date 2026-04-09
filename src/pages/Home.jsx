import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Home = () => {
  const navigate = useNavigate()
  const { user, signOut } = useAuth()

  const handleSignOut = () => {
    signOut()
    navigate('/')
  }

  return (
    <div className="home-container">

      <div className="home-box">
        {/* <h2 className="welcome-title">Welcome</h2> */}
        {/* <h4 className="user-email">{user?.email}</h4> */}
        <button className="signout-btn" onClick={handleSignOut}>Sign Out</button>
      </div>

      <div className="home-welcome">
        <h2 className="user-menu-name">Hey,{user.displayName}👋</h2>
        {/* <div className="user-menu-name">{user.displayName}</div> */}
        <p className="home-subtitle">Ready to analyze your internal marks?</p>
      </div>

      <div className="home-content">
        <h5>Internal Marks Calculator</h5>
        <p>
          Enter your mid exam scores, assignments, and attendance for each subject.
          Get a full breakdown of your internals and what you need in the external exam.
        </p>
        <button className="home-cal-btn" onClick={() => navigate('/subjects')}>
          Start Calculating
        </button>
      </div>

      <div className="home-formula-card">
        <h3>Smart Formula</h3>
        <p className="formula-text">
          SmartMid = 0.8 × max(M1,M2) + 0.2 × min(M1,M2) <br />
          Internal/15 = (SmartMid + Assignments + Attendance) / 40 × 15 <br />
          Pass if: External ≥ 28 AND Internal + External ≥ 40
        </p>
      </div>

    </div>
  )
}

export default Home
