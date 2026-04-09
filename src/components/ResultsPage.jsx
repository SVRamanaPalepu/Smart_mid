import React, { useState } from 'react'

const ResultCard = ({ subject }) => {
  const [open, setOpen] = useState(true)
  const [target, setTarget] = useState(60)

  const res = subject
  const targetExt = Math.max(28, target - res.internal15)
  const passWithMin = res.pass(res.minExternal)

  const suggestions = []
  if (subject.attendance < 75) suggestions.push('⚠️ Attendance below 75% — attend more classes')
  if (+subject.submitted < +subject.total) suggestions.push('📌 Submit all pending assignments for full marks')
  if (Math.max(+subject.mid1, +subject.mid2) < 20) suggestions.push('📚 Focus on mid exam preparation next semester')
  if (res.internal15 < 10) suggestions.push('⚡ Internal marks are low — external exam is crucial')
  if (suggestions.length === 0) suggestions.push('✅ Great work! Keep it up!')

  return (
    <div className="result-card">
      <div className="result-header" onClick={() => setOpen((v) => !v)}>
        <div className="result-header-left">
          <div className="result-name">{subject.name || `Subject ${subject.index + 1}`}</div>
          <span className={`badge ${passWithMin ? 'badge-pass' : 'badge-fail'}`}>
            {passWithMin ? '✓ Passable' : '✗ At Risk'}
          </span>
        </div>
        <div className="result-header-right">
          <span className="result-score">{res.internal15.toFixed(1)}<span className="result-score-total">/15</span></span>
          <span className="result-arrow">{open ? '▲' : '▼'}</span>
        </div>
      </div>

      {open && (
        <div className="result-body">
          <div className="progress-wrap">
            <div className="progress-top">
              <span className="progress-label">Internal Progress</span>
              <span className="progress-value">{res.totalInternal.toFixed(1)} / 40</span>
            </div>
            <div className="internal-bar">
              <div className="internal-bar-fill" style={{ width: `${(res.totalInternal / 40) * 100}%` }} />
            </div>
          </div>

          <div className="stats-list">
            {[
              // ['SmartMid Score',       `${res.smartMid} / 30`],
              // ['Assignments',          `${res.assignments.toFixed(2)} / 5`],
              // ['Attendance Marks',     `${res.attendanceMarks.toFixed(2)} / 5`],
              // ['Total Internal',       `${res.totalInternal.toFixed(2)} / 40`],
              ['Internal (out of 15)', `${res.internal15.toFixed(2)} / 15`],
              ['Min. External Needed', `${res.minExternal.toFixed(0)} / 70`],
            ].map(([l, v]) => (
              <div className="stat-row" key={l}>
                <span className="stat-label">{l}</span>
                <span className="stat-value">{v}</span>
              </div>
            ))}
          </div>

          <div className="target-box">
            <div className="target-row">
              <span className="target-label">🎯 Target Total Score:</span>
              <select className="select" style={{ padding: '6px 10px', fontSize: '0.85rem' }} value={target} onChange={(e) => setTarget(+e.target.value)}>
                {[40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90].map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              <span className="target-result">Need: {Math.max(0, Math.min(60, targetExt)).toFixed(0)} / 60 external</span>
            </div>
          </div>

       
        </div>
      )}
    </div>
  ) 
}

export default ResultCard
