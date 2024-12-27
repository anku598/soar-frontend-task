import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { Outlet } from 'react-router'

export function DashboardLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
