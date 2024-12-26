import {
  cardApi,
  statisticsApi,
  transactionApi,
} from '@/services/api/endpoints'
import {
  Card,
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
  isLoading: boolean
  error: string | null
  fetchDashboardData: () => Promise<void>
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  cards: [],
  transactions: [],
  statistics: null,
  weeklyActivity: [],
  isLoading: false,
  error: null,
  fetchDashboardData: async () => {
    set({ isLoading: true, error: null })
    try {
      const [cards, transactions, stats, activity] = await Promise.all([
        cardApi.getAll(),
        transactionApi.getRecent(),
        statisticsApi.getExpenseStats(),
        statisticsApi.getWeeklyActivity(),
      ])

      set({
        cards,
        transactions,
        statistics: stats,
        weeklyActivity: activity,
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
