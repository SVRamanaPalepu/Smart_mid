import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SubForm from '../components/SubForm'
import { calculate } from '../utils/calculate'

const makeSubject = (i) => ({
  name: `Subject ${i + 1}`,
  mid1: '', mid2: '', submitted: '', total: '5', attendance: '',
})

const SubjectsPage = ({ setResults }) => {
  const navigate = useNavigate()
  const [count, setCount] = useState(3)
  const [subjects, setSubjects] = useState(
    Array.from({ length: 3 }, (_, i) => makeSubject(i))
  )

  const updateCount = (n) => {
    setCount(n)
    setSubjects((prev) => {
      const arr = [...prev]
      while (arr.length < n) arr.push(makeSubject(arr.length))
      return arr.slice(0, n)
    })
  }

  const updateSubject = (i, key, value) =>
    setSubjects((prev) => prev.map((s, idx) => (idx === i ? { ...s, [key]: value } : s)))

  const submit = () => {
    const results = subjects.map((s, i) => ({ ...s, ...calculate(s), index: i }))
    setResults(results)
    navigate('/results')
  }

  return (
    <div className="subjects-page">
      <div className="subjects-header">
        <h2 className="subjects-title">📝 Enter Subject Details</h2>
        <div className="subjects-count">
          <label className="input-label">Subjects:</label>
          <select className="select" value={count} onChange={(e) => updateCount(+e.target.value)} style={{ width: 80 }}>
            {[2, 3, 4, 5, 6, 7, 8].map((n) => <option key={n}>{n}</option>)}
          </select>
        </div>
      </div>

      {subjects.map((s, i) => (
        <SubForm key={i} subject={s} index={i} onUpdate={updateSubject} />
      ))}

      <div className="subjects-actions">
        <button className="btn btn-success" onClick={submit}>Calculate Results →</button>
        <button className="btn btn-outline" onClick={() => navigate('/home')}>← Back</button>
      </div>
    </div>
  )
}

export default SubjectsPage
