import { Card } from '@/services/api/types';
import { formatCurrency } from '@/utils/formatters';


type CardInfoProps = Card & {
  style?: React.CSSProperties;
  isFirstCard?: boolean;
}

export function CardInfo({
  cardNumber,
  cardHolder,
  balance,
  expiryDate,
  type,
  style,
  isFirstCard,
}: CardInfoProps) {
  const textColorClass = isFirstCard ? 'text-white' : 'text-[#718EBF]'
  const headingColorClass = isFirstCard ? 'text-white' : 'text-[#343C6A]'
  const cardNumberContainerClass = isFirstCard 
  ? 'bg-gradient-to-b from-white/15 to-transparent'
  : 'border-t border-gray-200'

  return (
    <div   className={`rounded-[25px]  shadow-sm w-full ${!style ? 'bg-white' : ''}`}
    style={style}>
      <div className="flex justify-between items-start p-6 mb-4">
        <div className="space-y-1">
        <p className={`text-sm ${textColorClass}`}>Balance</p>
          <p className={`text-xl font-semibold ${headingColorClass}`}>
            {formatCurrency(balance)}
          </p>
        </div>

        <img
          src={`/icons/${type}.svg`}
          alt={type}
          className="w-12 h-8 object-contain"
        />
      </div>

      <div className="space-y-4">
      

        <div className="flex justify-between items-end p-6">
          <div className="">
          <p className={`text-xs ${textColorClass}`}>CARD HOLDER</p>
          <p className={`font-medium ${headingColorClass}`}>{cardHolder}</p>
          </div>
          <div className="">
          <p className={`text-xs ${textColorClass}`}>EXPIRES</p>
          <p className={`font-medium ${headingColorClass}`}>{expiryDate}</p>
          </div>
        </div>
      </div>

      <div className={cardNumberContainerClass}>
          <p className={`font-mono text-lg p-6 ${headingColorClass}`}>{cardNumber}</p>
        </div>
    </div>
  )
}
