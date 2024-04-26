import React from 'react'
import './assets/scss/global.scss'
import LandingPage from './pages/LandingPage'
import AppHeader from './components/AppHeader'

export default function App() {
  return (
    <>
      <AppHeader />
      <LandingPage />
    </>
  )
}