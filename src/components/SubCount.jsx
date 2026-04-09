import React from 'react'
import { useTheme } from '../context/ThemeContext'

export const ThemeToggle = () => {
  const { theme, toggle } = useTheme()
  return (
    <button className="theme-toggle" onClick={toggle} title="Toggle theme">
      <div className="theme-toggle-thumb">
        {theme === 'dark' ? '🌙' : '☀️'}
      </div>
    </button>
  )
}

export const Avatar = ({ name, onClick }) => {
  const letter = (name || 'U')[0].toUpperCase()
  return (
    <div className="avatar" onClick={onClick}>
      {letter}
    </div>
  )
}

export const Footer = () => {
  return (
    <footer className="footer">
      SmartMid ✦ — Internal Marks Analyzer &nbsp;·&nbsp; Built for students
    </footer>
  )
}
