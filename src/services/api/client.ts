import {
  default as avatarOne,
  default as avatarThree,
} from '@/assets/img/avatar-1.png';
import avatarTwo from '@/assets/img/avatar-2.png';

const BASE_URL = '/api'

// Mock data
const MOCK_DATA:  { [key: string]: any } = {
  '/api/cards': [
    {
      id: '1',
      cardNumber: '3778 **** **** 1234',
      cardHolder: 'Eddy Cusuma',
      balance: 5756,
      expiryDate: '12/22',
      type: 'mastercard',
    },
    {
      id: '2',
      cardNumber: '3888 **** **** 1234',
      cardHolder: 'Eddy Cusuma',
      balance: 5756,
      expiryDate: '12/26',
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
    {
      id: '2',
      type: 'paypal',
      amount: 2500,
      description: 'Deposit Paypal',
      date: '25 January 2021',
    },
    {
      id: '3',
      type: 'transfer',
      amount: 5400,
      description: 'Jemi Wilson',
      date: '21 January 2021',
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

  '/api/transfer/users': [
    {
      id: '1',
      name: 'Livia Bator',
      role: 'CEO',
      avatar: avatarOne,
    },
    {
      id: '2',
      name: 'Randy Press',
      role: 'Director',
      avatar: avatarTwo,
    },
    {
      id: '3',
      name: 'Workman',
      role: 'Designer',
      avatar: avatarThree,
    },
    {
      id: '4',
      name: 'Workman',
      role: 'Designer',
      avatar: avatarThree,
    },
    {
      id: '5',
      name: 'Workman',
      role: 'Designer',
      avatar: avatarThree,
    },
    {
      id: '6',
      name: 'Workman',
      role: 'Designer',
      avatar: avatarThree,
    },
  ],
}

interface ApiResponse<T> {
  data: T;
}

interface ApiClient {
  get<T>(path: string): Promise<ApiResponse<T>>;
}


// For development, just return mock data directly
export const apiClient : ApiClient = {
  get: async <T>(url: string):Promise<ApiResponse<T>> => {
    
    const path = url.startsWith(BASE_URL) ? url : `${BASE_URL}${url}`
    const mockResponse = MOCK_DATA[path]

    if (mockResponse) {
      return Promise.resolve({ data: mockResponse })
    }

    return Promise.reject(new Error(`No mock data found for ${path}`))
  },
}

export default apiClient
