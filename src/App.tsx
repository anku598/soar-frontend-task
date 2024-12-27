import { Dashboard } from '@/features/dashboard/pages/Dashboard'
import { Settings } from '@/features/settings/pages/Settings'
import { DashboardLayout } from '@/layouts/DashboardLayout'
import { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router'

const ScreenSizeIndicator = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        background: 'rgba(0, 0, 0, 0.75)',
        color: 'white',
        padding: '4px 8px',
        borderRadius: '4px',
        fontSize: '12px',
        zIndex: 9999,
      }}
    >
      {screenSize.width}px × {screenSize.height}px
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
      <ScreenSizeIndicator />
    </Router>
  )
}

export default App
