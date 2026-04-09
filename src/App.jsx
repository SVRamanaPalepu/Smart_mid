import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ThemeProvider, { useTheme } from './context/ThemeContext'
import AuthProvider, { useAuth } from './context/AuthContext'

import SubjectPage from './components/SubjectPage'
import { Footer } from './components/SubCount'

import LandingPage from './pages/LandingPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import SubjectsPage from './pages/SubjectsPage'
import ResultsPage from './pages/ResultsPage'
import Settings from './pages/Settings'

import './index.css'

const AppContent = () => {
  const { theme } = useTheme()
  const { user } = useAuth()
  const [results, setResults] = useState([])

  return (
    <div className={theme} style={{ minHeight: '100vh', background: 'var(--bg)', transition: 'background 0.3s' }}>
      <SubjectPage />

      <Routes>
        <Route path="/"         element={<LandingPage />} />
        <Route path="/signin"   element={!user ? <SignIn />  : <Navigate to="/home" />} />
        <Route path="/signup"   element={!user ? <SignUp />  : <Navigate to="/home" />} />
        <Route path="/home"     element={user  ? <Home />    : <Navigate to="/signin" />} />
        <Route path="/subjects" element={user  ? <SubjectsPage setResults={setResults} /> : <Navigate to="/signin" />} />
        <Route path="/results"  element={user  ? <ResultsPage results={results} />        : <Navigate to="/signin" />} />
        <Route path="/settings" element={user  ? <Settings /> : <Navigate to="/signin" />} />
        <Route path="*"         element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </div>
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
