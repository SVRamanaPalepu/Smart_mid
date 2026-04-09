import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { ThemeToggle, Avatar } from './SubCount'

const SubjectPage = () => {
  const navigate = useNavigate()
  const { user, signOut } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div
        className="header-logo"
        style={{ cursor: 'pointer' }}
        onClick={() => navigate(user ? '/home' : '/')}
      >
        smart mid✦
      </div>

      <div className="header-right">
        <ThemeToggle />
        {!user ? (
          <>
            <button className="btn btn-outline btn-sm" onClick={() => navigate('/signin')}>Sign In</button>
            <button className="btn btn-primary btn-sm" onClick={() => navigate('/signup')}>Sign Up</button>
          </>
        ) : (
          <div className="user-menu-wrap">
            <Avatar name={user.displayName} onClick={() => setMenuOpen((v) => !v)} />
            {menuOpen && (
              <div className="user-menu" onClick={() => setMenuOpen(false)}>
                <div className="user-menu-info">
                  <div className="user-menu-name">{user.displayName}</div>
                  <div className="user-menu-email">{user.email}</div>
                </div>
                <div className="user-menu-item" onClick={() => navigate('/home')}>🏠 Home</div>
                <div className="user-menu-item" onClick={() => navigate('/subjects')}>📝 Calculator</div>
                <div className="user-menu-item" onClick={() => navigate('/settings')}>⚙️ Settings</div>
                <div className="user-menu-item danger" onClick={() => { signOut(); navigate('/') }}>🚪 Sign Out</div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  )
}

export default SubjectPage
