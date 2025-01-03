import { CreditCardsIcon } from './icons/credit-cards'
import { DashboardIcon } from './icons/dashboard'
import { SettingsIcon } from './icons/header-settings-gear'
import { InvestmentIcon } from './icons/investment'
import { LoansIcon } from './icons/loans'
import { NotificationIcon } from './icons/notification-icon'
import { PrivilegesIcon } from './icons/privileges'
import { SearchIcon } from './icons/search-icon'
import { ServicesIcon } from './icons/services'
import { SidebarSettingsIcon } from './icons/sidebar-settings'
import { TransactionIcon } from './icons/transaction'
import { UserIcon } from './icons/user'
import { Logo } from './Logo'
import { MenuIcon } from './MenuIcon'
// ... import other icons

export const IconRegistry = {
  dashboard: DashboardIcon,
  transaction: TransactionIcon,
  services: ServicesIcon,
  loans: LoansIcon,
  investments: InvestmentIcon,
  privileges: PrivilegesIcon,
  users: UserIcon,
  menu: MenuIcon,
  logo: Logo,
  search: SearchIcon,
  notification: NotificationIcon,
  'header-settings-gear': SettingsIcon,
  'credit-cards': CreditCardsIcon,
  'sidebar-settings': SidebarSettingsIcon,

  // ... add other icons
} as const

export type IconName = keyof typeof IconRegistry
