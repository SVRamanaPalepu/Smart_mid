import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const LandingPage = () => {
  const navigate = useNavigate()
  const { user } = useAuth()

  return (
    <div className="landing-page">
      <div className="landing-hero">
        <div className="landing-title">
          Predict Minimum <span> External Score</span><br />to pass the Exam
        </div>
        <p className="landing-sub">
          SmartMid calculates your internal marks, predicts your minimum
          external score, and tells you exactly what you need to pass.
        </p>
        {user ? (
          <button className="btn btn-primary" onClick={() => navigate('/subjects')}>
            ✦ Continue to Calculator
          </button>
        ) : (
          <div className="landing-btns">
            <button className="btn btn-primary" onClick={() => navigate('/signup')}>Get Started →</button>
            <button className="btn btn-outline" onClick={() => navigate('/signin')}>Sign In</button>
          </div>
        )}
      </div>

      <div className="features-grid">
        {[
          { icon: '📊', title: 'SmartMid Formula',  desc: 'Weighs your best mid exam at 80% and the other at 20% for maximum accuracy.' },
          { icon: '🎯', title: 'Pass Predictor',     desc: 'Find the exact minimum external marks needed to pass each subject.' },
          { icon: '📈', title: 'Target Calculator',  desc: 'Set your target grade and instantly see what external score you need.' },
          { icon: '📋', title: 'Multi-Subject',      desc: 'Analyze all your subjects at once with detailed per-subject breakdowns.' },
        ].map((f, i) => (
          <div className="feature-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="feature-icon">{f.icon}</div>
            <div className="feature-title">{f.title}</div>
            <div className="feature-desc">{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LandingPage
