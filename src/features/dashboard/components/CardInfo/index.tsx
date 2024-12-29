import { Card } from '@/services/api/types'
import { formatCurrency } from '@/utils/formatters'

type CardInfoProps = Card

export function CardInfo({
  cardNumber,
  cardHolder,
  balance,
  expiryDate,
  type,
}: CardInfoProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm w-full">
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Balance</p>
          <p className="text-xl font-semibold">{formatCurrency(balance)}</p>
        </div>
        {/* Card type logo */}
        <img
          src={`/icons/${type}.svg`}
          alt={type}
          className="w-12 h-8 object-contain"
        />
      </div>

      <div className="space-y-4">
        <p className="font-mono text-lg">{cardNumber}</p>

        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <p className="text-xs text-gray-500">CARD HOLDER</p>
            <p className="font-medium">{cardHolder}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-gray-500">EXPIRES</p>
            <p className="font-medium">{expiryDate}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
