import React from 'react'

const SubForm = ({ subject, index, onUpdate }) => {
  const update = (key) => (e) => onUpdate(index, key, e.target.value)

  return (
    <div className="subject-card">
      <div className="subject-card-header">
        <span className="subject-num">SUBJECT {index + 1}</span>
        <input
          className="input"
          style={{ maxWidth: 220 }}
          placeholder={`Subject ${index + 1} name (optional)`}
          value={subject.name}
          onChange={update('name')}
        />
      </div>

      <div className="fields-grid">
        <div className="input-group">
          <label className="input-label">Mid-1 (out of 30)</label>
          <input className="input" type="number" min="0" max="30" placeholder="e.g. 22" value={subject.mid1} onChange={update('mid1')} />
        </div>
        <div className="input-group">
          <label className="input-label">Mid-2 (out of 30)</label>
          <input className="input" type="number" min="0" max="30" placeholder="e.g. 26" value={subject.mid2} onChange={update('mid2')} />
        </div>
        <div className="input-group">
          <label className="input-label">Assignments Submitted</label>
          <input className="input" type="number" min="0" placeholder="e.g. 4" value={subject.submitted} onChange={update('submitted')} />
        </div>
        <div className="input-group">
          <label className="input-label">Total Assignments</label>
          <input className="input" type="number" min="1" placeholder="e.g. 5" value={subject.total} onChange={update('total')} />
        </div>
        <div className="input-group">
          <label className="input-label">Attendance %</label>
          <input className="input" type="number" min="0" max="100" placeholder="e.g. 85" value={subject.attendance} onChange={update('attendance')} />
        </div>
      </div>
    </div>
  )
}

export default SubForm
