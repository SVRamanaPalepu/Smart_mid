import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { ThemeToggle } from '../components/SubCount'

const Settings = () => {
  const navigate = useNavigate()
  const { user, signOut } = useAuth()

  return (
    <div className="settings-page">
      <h2 className="settings-heading">⚙️ Settings</h2>

      <div className="settings-card">

        <div className="settings-section">
          <div className="settings-title">Appearance</div>
          <div className="settings-row">
            <div>
              <div className="settings-row-label">🌙 Dark Mode</div>
              <div className="settings-row-sub">Switch between light and dark theme</div>
            </div>
            <ThemeToggle />
          </div>
        </div>

        <hr className="divider" />

        <div className="settings-section">
          <div className="settings-title">Account</div>
          {user && (
            <div className="settings-row">
              <div>
                <div className="settings-row-label">👤 {user.displayName}</div>
                <div className="settings-row-sub">{user.email}</div>
              </div>
              <div className="avatar">{user.displayName[0].toUpperCase()}</div>
            </div>
          )}
          <div className="settings-row">
            <div>
              <div className="settings-row-label" style={{ color: 'var(--accent2)' }}>🚪 Sign Out</div>
              <div className="settings-row-sub">You'll be returned to the landing page</div>
            </div>
            <button className="btn btn-danger btn-sm" onClick={() => { signOut(); navigate('/') }}>Sign Out</button>
          </div>
        </div>

        <hr className="divider" />

        <div className="settings-section" style={{ marginBottom: 0 }}>
          <div className="settings-title">Formula Reference</div>
          <div className="formula-ref">
            SmartMid = 0.8×max(M1,M2) + 0.2×min(M1,M2)<br />
            Assignments = (submitted/total) × 5<br />
            Attendance = (attendance%/100) × 5<br />
            TotalInternal = SmartMid + Assignments + Attendance<br />
            Internal15 = (TotalInternal / 40) × 15<br />
            Pass: External ≥ 28 AND Internal15 + External ≥ 40
          </div>
        </div>

      </div>
    </div>
  )
}

export default Settings
