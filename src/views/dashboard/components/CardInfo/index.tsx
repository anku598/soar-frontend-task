import chipCardBlack from '@/assets/Chip_Card-for-black-shade.svg'
import chipCardWhite from '@/assets/Chip_Card-for-white.svg'
import masterCardLogoBlack from '@/assets/master-card-logo-black.svg'
import masterCardLogoWhite from '@/assets/master-card-logo-white.svg'
import { cn } from '@/lib/utils'
import { Card } from '@/services/api/types'
import { formatCurrency } from '@/utils/formatters'

type CardInfoProps = Card & {
  style?: React.CSSProperties
  isFirstCard?: boolean
  className?: string
}

export function CardInfo({
  cardNumber,
  cardHolder,
  balance,
  expiryDate,
  style,
  isFirstCard,
  className,
}: CardInfoProps) {
  const textColorClass = isFirstCard ? 'text-white' : 'text-[#718EBF]'
  const headingColorClass = isFirstCard ? 'text-white' : 'text-[#343C6A]'
  const cardNumberContainerClass = isFirstCard
    ? 'bg-gradient-to-b from-white/15 to-transparent'
    : 'border-t border-gray-200'

  return (
    <div
      className={cn(
        'rounded-[25px] shadow-sm w-full border border-[#DFEAF2] sm:border-0',
        !style ? 'bg-white' : '',
        className
      )}
      style={style}
    >
      <div className="flex justify-between items-start p-6 pb-0">
        <div className="space-y-1">
          <p className={`text-[11px]  sm:text-[12px] ${textColorClass}`}>
            Balance
          </p>
          <p
            className={`text-[16px] mt-0 sm:text-[20px] font-semibold ${headingColorClass}`}
          >
            {formatCurrency(balance)}
          </p>
        </div>

        <img
          src={isFirstCard ? chipCardBlack : chipCardWhite}
          alt={isFirstCard ? 'chip card black' : 'chip card white'}
          className="object-contain w-10 h-8 sm:w-auto sm:h-auto"
        />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-end p-6">
          <div className="">
            <p
              className={`text-[10px] uppercase opacity-[0.7] sm:text-[12px] ${textColorClass}`}
            >
              CARD HOLDER
            </p>
            <p
              className={`font-medium text-[13px] sm:text-[15px] ${headingColorClass}`}
            >
              {cardHolder}
            </p>
          </div>
          <div className="">
            <p
              className={`text-[10px] uppercase opacity-[0.7] sm:text-[12px] ${textColorClass}`}
            >
              EXPIRES
            </p>
            <p
              className={`text-[13px] font-medium sm:text-[15px] ${headingColorClass}`}
            >
              {expiryDate}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`flex justify-between items-center p-6 ${cardNumberContainerClass}`}
      >
        <p
          className={`text-[15px] sm:text-[22px] font-[600]  ${headingColorClass}`}
        >
          {cardNumber}
        </p>
        <img
          src={isFirstCard ? masterCardLogoWhite : masterCardLogoBlack}
          alt={
            isFirstCard ? 'master card logo black' : 'master card logo white'
          }
          className="w-8 h-6 sm:w-12 sm:h-8 object-contain"
        />
      </div>
    </div>
  )
}
