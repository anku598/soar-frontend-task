import { apiClient } from './client'
import {
  Card,
  Statistics,
  Transaction,
  TransferUser,
  WeeklyActivity,
} from './types'

export const cardApi = {
  getAll: async () => {
    const response = await apiClient.get<Card[]>('/cards')
    return response.data
  },
}

export const transactionApi = {
  getRecent: async () => {
    const response = await apiClient.get<Transaction[]>('/transactions/recent')
    return response.data
  },
}

export const statisticsApi = {
  getExpenseStats: async () => {
    const response = await apiClient.get<Statistics>('/statistics/expenses')
    return response.data
  },

  getWeeklyActivity: async () => {
    const response = await apiClient.get<WeeklyActivity[]>('/statistics/weekly')
    return response.data
  },
}

export const quickTransfer = {
  getUsers: async () => {
    const response = await apiClient.get<TransferUser[]>(
      '/quick-transfer/users'
    )
    return response.data
  },
}
