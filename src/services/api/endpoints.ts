import { apiClient } from './client'
import {
  Card,
  Statistics,
  Transaction,
  TransferUser,
  WeeklyActivity,
} from './types'

export async function getCards(): Promise<Card[]> {
  try {
    const response = await apiClient.get<Card[]>('/api/cards')
    return response.data
  } catch (error) {
    console.error('Error fetching cards:', error)
    return []
  }
}

export async function getRecentTransactions(): Promise<Transaction[]> {
  try {
    const response = await apiClient.get<Transaction[]>('/api/transactions/recent')
    return response.data
  } catch (error) {
    console.error('Error fetching recent transactions:', error)
    // Return empty array as fallback
    return []
  }
}

export async function getExpenseStatistics(): Promise<Statistics> {
  try {
    const response = await apiClient.get<Statistics>('/api/statistics/expenses')
    return response.data
  } catch (error) {
    console.error('Error fetching expense statistics:', error)
    throw error
  }
}

export async function getWeeklyActivity(): Promise<WeeklyActivity[]> {
  try {
    const response = await apiClient.get<WeeklyActivity[]>('/api/statistics/weekly')
    return response.data
  } catch (error) {
    console.error('Error fetching weekly activity:', error)
    return []
  }
}

export async function getTransferUsers(): Promise<TransferUser[]> {
  try {
    const response = await apiClient.get<TransferUser[]>('/api/transfer/users')
    return response.data
  } catch (error) {
    console.error('Error fetching transfer users:', error)
    return []
  }
}
