import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { IconComp } from '../icons/IconComp'
import { IconName } from '../icons/registry'

const navigation = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    href: '/',
    icon: 'dashboard' as IconName,
  },
  {
    id: 'transactions',
    name: 'Transactions',
    href: '/transactions',
    icon: 'transaction' as IconName,
  },
  {
    id: 'users',
    name: 'Accounts',
    href: '/accounts',
    icon: 'users' as IconName,
  },
  {
    id: 'investments',
    name: 'Investments',
    href: '/investments',
    icon: 'investments' as IconName,
  },
  {
    id: 'credit-cards',
    name: 'Credit Cards',
    href: '/cards',
    icon: 'credit-cards' as IconName,
  },
  { id: 'loans', name: 'Loans', href: '/loans', icon: 'loans' as IconName },
  {
    id: 'privileges',
    name: 'My Privileges',
    href: '/privileges',
    icon: 'privileges' as IconName,
  },
  {
    id: 'services',
    name: 'Services',
    href: '/services',
    icon: 'services' as IconName,
  },
  {
    id: 'settings',
    name: 'Settings',
    href: '/settings',
    icon: 'sidebar-settings' as IconName,
  },
]

export function Sidebar() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-50 md:hidden"
      >
        <IconComp name="menu" className="h-6 w-6" color="#232323" />
      </button>

      <div
        className={cn(
          'fixed inset-y-0 left-0 z-40 flex h-full w-64 flex-col border-r bg-white transition-transform duration-300 ease-in-out md:relative md:translate-x-0',
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="p-4 px-10">
          <h1 className="text-2xl font-bold text-[#343C6A] capitalize">
            Soar Task
          </h1>
        </div>

        <nav className="flex-1 space-y-1 p-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'flex items-center gap-3 px-10 py-4 text-lg font-medium',
                  isActive ? 'text-[#232323]' : 'text-[#B1B1B1]'
                )}
              >
                <IconComp
                  name={item.icon as IconName}
                  className="h-5 w-5"
                  color={isActive ? '#232323' : '#B1B1B1'}
                />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}