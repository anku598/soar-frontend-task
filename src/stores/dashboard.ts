import {
  getCards,
  getExpenseStatistics,
  getRecentTransactions,
  getTransferUsers,
  getWeeklyActivity,
} from '@/services/api/endpoints'
import {
  Card,
  QuickTransfer,
  Statistics,
  Transaction,
  WeeklyActivity,
} from '@/services/api/types'
import { create } from 'zustand'

interface DashboardStore {
  cards: Card[]
  transactions: Transaction[]
  statistics: Statistics | null
  weeklyActivity: WeeklyActivity[]
  quickTransfer: QuickTransfer
  isLoading: boolean
  error: string | null
  fetchDashboardData: () => Promise<void>
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  cards: [],
  transactions: [],
  statistics: null,
  weeklyActivity: [],
  quickTransfer: {
    users: [],
  },
  isLoading: false,
  error: null,
  fetchDashboardData: async () => {
    set({ isLoading: true, error: null })
    try {
      const [cards, transactions, stats, activity, quickTransferUsers] =
        await Promise.all([
          getCards(),
          getRecentTransactions(),
          getExpenseStatistics(),
          getWeeklyActivity(),
          getTransferUsers(),
        ])

      set({
        cards,
        transactions,
        statistics: stats,
        weeklyActivity: activity,
        quickTransfer: { users: quickTransferUsers },
        isLoading: false,
      })
    } catch (error) {
      set({
        error: 'Failed to fetch dashboard data',
        isLoading: false,
      })
    }
  },
}))