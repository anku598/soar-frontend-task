const BASE_URL = '/api'

// Mock data
const MOCK_DATA = {
  '/api/cards': [
    {
      id: '1',
      cardNumber: '3778 **** **** 1234',
      cardHolder: 'Eddy Cusuma',
      balance: 5756,
      expiryDate: '12/22',
      type: 'mastercard',
    },
  ],
  '/api/transactions/recent': [
    {
      id: '1',
      type: 'deposit',
      amount: 850,
      description: 'Deposit from my Card',
      date: '28 January 2021',
    },
  ],
  '/api/statistics/weekly': [
    { day: 'Sat', deposits: 400, withdrawals: 300 },
    { day: 'Sun', deposits: 500, withdrawals: 400 },
    { day: 'Mon', deposits: 300, withdrawals: 400 },
    { day: 'Tue', deposits: 500, withdrawals: 300 },
    { day: 'Wed', deposits: 400, withdrawals: 500 },
    { day: 'Thu', deposits: 600, withdrawals: 400 },
    { day: 'Fri', deposits: 300, withdrawals: 600 },
  ],
  '/api/statistics/expenses': {
    entertainment: 30,
    billExpense: 15,
    investment: 20,
    others: 35,
  },
}

// For development, just return mock data directly
export const apiClient = {
  get: async (url: string) => {
    // Remove the base URL if it's included
    const path = url.startsWith(BASE_URL) ? url : `${BASE_URL}${url}`
    const mockResponse = MOCK_DATA[path]

    if (mockResponse) {
      return Promise.resolve({ data: mockResponse })
    }

    return Promise.reject(new Error(`No mock data found for ${path}`))
  },
}

export default apiClient
