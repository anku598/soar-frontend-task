import depositeCard from '@/assets/deposite-card.svg'
import paypal from '@/assets/paypal.svg'
import willson from '@/assets/willson.svg'
import { Transaction } from '@/services/api/types'
import { formatDate } from '@/utils/formatters'

interface RecentTransactionsProps {
  transactions: Transaction[]
}

export function RecentTransactions({ transactions }: RecentTransactionsProps) {
  return (
   <div >
     <h3 className="mb-4 font-heading-2">Recent Transaction</h3>
    <div className="bg-white rounded-[25px] p-6 min-h-[250px] ">
    
      <div className="space-y-4 ">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getIconBackground(transaction.type)}`}>
              <img 
                src={getTransactionImage(transaction.type)} 
                alt={transaction.type}
                className="w-5 h-5"
              />
            </div>
              <div>
                <p className="text-[#232323] font-[500] text-[16px]">{transaction.description}</p>
                <p className="text-[15px] text-[#718EBF] font-[400]">{formatDate(transaction.date)}</p>
              </div>
            </div>
            <span className={`font-[500] ${getAmountColor(transaction.type)}`}>
              {getAmountPrefix(transaction.type)}${Math.abs(transaction.amount).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
   </div>
  )
}

function getTransactionImage(type: string): string {
  switch (type.toLowerCase()) {
    case 'withdrawal':
      return depositeCard
    case 'paypal':
      return paypal
    case 'transfer':
      return willson
    default:
      return paypal
  }
}


function getIconBackground(type: string): string {
  switch (type.toLowerCase()) {
    case 'withdrawal':
      return 'bg-[#FFF5D9]'
    case 'paypal':
      return 'bg-[#E7EDFF]'
    case 'transfer':
      return 'bg-[#DCFAF8]'
    default:
      return 'bg-[#DCFAF8]'
  }
}

function getAmountColor(type: string): string {
  switch (type.toLowerCase()) {
    case 'withdrawal':
      return 'text-[#FF4B4A]'
    case 'deposit':
      return 'text-[#41D4A8]'
    case 'transfer':
      return 'text-[#41D4A8]'
    default:
      return 'text-[#41D4A8]'
  }
}

function getAmountPrefix(type: string): string {
  return type.toLowerCase() === 'withdrawal' ? '-' : '+'
} 