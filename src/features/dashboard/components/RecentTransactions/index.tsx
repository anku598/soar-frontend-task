import { IconComp } from '@/components/icons/IconComp'
import { Button } from '@/components/ui/button'
import { Transaction } from '@/services/api/types'
import { formatDate } from '@/utils/formatters'

interface RecentTransactionsProps {
  transactions: Transaction[]
}

export function RecentTransactions({ transactions }: RecentTransactionsProps) {
  return (
   <div>
     <h3 className="mb-4 font-heading-2">Recent Transaction</h3>
    <div className="bg-white rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <Button variant="link" className="text-[#343C6A] text-[17px] font-[600] capitalize hover:no-underline">
          See All
        </Button>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getIconBackground(transaction.type)}`}>
                <IconComp name={getTransactionIcon(transaction.type)} className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[#343C6A] font-semibold">{transaction.description}</p>
                <p className="text-sm text-gray-500">{formatDate(transaction.date)}</p>
              </div>
            </div>
            <span className={`font-semibold ${getAmountColor(transaction.type)}`}>
              {getAmountPrefix(transaction.type)}${Math.abs(transaction.amount).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
   </div>
  )
}

function getTransactionIcon(type: string): string {
  switch (type.toLowerCase()) {
    case 'deposit':
      return 'credit-cards'
    case 'paypal':
      return 'transaction'
    case 'transfer':
      return 'transaction'
    default:
      return 'transaction'
  }
}

function getIconBackground(type: string): string {
  switch (type.toLowerCase()) {
    case 'deposit':
      return 'bg-[#FFF6E7]'
    case 'paypal':
      return 'bg-[#EDF0FF]'
    case 'transfer':
      return 'bg-[#E7EDFF]'
    default:
      return 'bg-blue-50'
  }
}

function getAmountColor(type: string): string {
  switch (type.toLowerCase()) {
    case 'withdrawal':
      return 'text-[#F3735E]'
    case 'deposit':
    case 'transfer':
      return 'text-[#7DD97B]'
    default:
      return 'text-[#343C6A]'
  }
}

function getAmountPrefix(type: string): string {
  return type.toLowerCase() === 'withdrawal' ? '-' : '+'
} 