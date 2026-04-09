import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const SignUp = () => {
  const navigate = useNavigate()
  const { signUp, loading } = useAuth()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [error, setError] = useState('')

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async () => {
    setError('')
    if (!form.name) return setError('Name is required.')
    if (!form.email || !form.password) return setError('Please fill all fields.')
    if (form.password !== form.confirm) return setError("Passwords don't match.")
    if (form.password.length < 6) return setError('Password must be at least 6 characters.')
    await signUp(form.name, form.email, form.password)
    navigate('/home')
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Create Account</h2>
        <p className="auth-sub">Join SmartMid and track your marks.</p>

        {error && <div className="error-msg">{error}</div>}

        <div className="auth-form">
          <div className="input-group">
            <label className="input-label">Full Name</label>
            <input className="input" placeholder="Your name" value={form.name} onChange={set('name')} />
          </div>
          <div className="input-group">
            <label className="input-label">Email</label>
            <input className="input" type="email" placeholder="you@example.com" value={form.email} onChange={set('email')} />
          </div>
          <div className="input-group">
            <label className="input-label">Password</label>
            <input className="input" type="password" placeholder="••••••••" value={form.password} onChange={set('password')} />
          </div>
          <div className="input-group">
            <label className="input-label">Confirm Password</label>
            <input className="input" type="password" placeholder="••••••••" value={form.confirm} onChange={set('confirm')} />
          </div>
          <button className="btn btn-primary auth-btn" onClick={submit} disabled={loading}>
            {loading ? <span className="spinner" /> : 'Create Account'}
          </button>
        </div>

        <p className="auth-switch">
          Already have an account? <span onClick={() => navigate('/signin')}>Sign In</span>
        </p>
      </div>
    </div>
  )
}

export default SignUp
