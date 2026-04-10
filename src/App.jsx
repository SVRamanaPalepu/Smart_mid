import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
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
import PageNotFound from './pages/PageNotFound'

const AppContent = () => {
  const { theme } = useTheme()
  const { user } = useAuth()
  const location = useLocation()
  const [results, setResults] = useState([])
  const isNotFound = location.pathname === '/404'

  return (
    <div className={theme} style={{ minHeight: '100vh', background: 'var(--bg)', transition: 'background 0.3s' }}>
      {!isNotFound && <SubjectPage />}

      <Routes>
        <Route path="/"         element={<LandingPage />} />
        <Route path="/signin"   element={!user ? <SignIn />  : <Navigate to="/home" />} />
        <Route path="/signup"   element={!user ? <SignUp />  : <Navigate to="/home" />} />
        <Route path="/home"     element={user  ? <Home />    : <Navigate to="/signin" />} />
        <Route path="/subjects" element={user  ? <SubjectsPage setResults={setResults} /> : <Navigate to="/signin" />} />
        <Route path="/results"  element={user  ? <ResultsPage results={results} />        : <Navigate to="/signin" />} />
        <Route path="/settings" element={user  ? <Settings /> : <Navigate to="/signin" />} />
        <Route path="/404"      element={<PageNotFound />} />
        <Route path="/not-found" element={<PageNotFound />} />
        <Route path="*"         element={<Navigate to="/404" replace />} />
      </Routes>

      {!isNotFound && <Footer />}
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
