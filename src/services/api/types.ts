export interface Card {
  id: string
  cardNumber: string
  cardHolder: string
  balance: number
  expiryDate: string
  type: 'mastercard' | 'visa'
}

export interface Transaction {
  id: string
  type: 'deposit' | 'withdrawal' | 'transfer'
  amount: number
  description: string
  date: string
  recipient?: string
}

export interface Statistics {
  entertainment: number
  billExpense: number
  investment: number
  others: number
}

export interface WeeklyActivity {
  day: string
  deposits: number
  withdrawals: number
}
