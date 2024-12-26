import { Dashboard } from '@/features/dashboard/pages/Dashboard'
import { Settings } from '@/features/settings/pages/Settings'
import { DashboardLayout } from '@/layouts/DashboardLayout'
import { Route, BrowserRouter as Router, Routes } from 'react-router'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
