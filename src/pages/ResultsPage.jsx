import React from 'react'
import { useNavigate } from 'react-router-dom'
import ResultCard from '../components/ResultsPage'

const ResultsPage = ({ results }) => {
  const navigate = useNavigate()

  if (!results || results.length === 0) {
    return (
      <div className="empty-results">
        <div className="empty-icon">📭</div>
        <h3>No Results Yet</h3>
        <p>Go back and enter your subject details first.</p>
        <button className="btn btn-primary" onClick={() => navigate('/subjects')}>← Enter Details</button>
      </div>
    )
  }

  const passing = results.filter((r) => r.pass(r.minExternal)).length

  return (
    <div className="results-page">
      <div className="results-header">
        <div>
          <h2 className="results-title">📊 Your Results</h2>
          <p className="results-sub">{passing} of {results.length} subjects passable with minimum external</p>
        </div>
        <button className="btn btn-outline btn-sm" onClick={() => navigate('/subjects')}>← Recalculate</button>
      </div>

      {results.map((r, i) => <ResultCard key={i} subject={r} />)}
    </div>
  )
}

export default ResultsPage
