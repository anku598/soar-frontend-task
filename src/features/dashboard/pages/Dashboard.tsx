import cardBg from '@/assets/img/credit-card-bg.jpg'
import { Button } from '@/components/ui/button'
import { useDashboardStore } from '@/stores/dashboard'
import { useCallback, useEffect } from 'react'
import { BalanceHistory } from '../components/BalanceHistory'
import { CardInfo } from '../components/CardInfo'
import { ExpenseStatistics } from '../components/ExpenseStatistics'
import { QuickTransfer } from '../components/QuickTransfer'
import { RecentTransactions } from '../components/RecentTransactions'
import { WeeklyActivity } from '../components/WeeklyActivity'


export function Dashboard() {
  const {
    weeklyActivity,
    statistics,
    quickTransfer,
    isLoading,
    error,
    cards,
    transactions,
    fetchDashboardData,
  } = useDashboardStore()

  // Memoize fetchDashboardData to prevent infinite re-renders
  const fetchData = useCallback(() => {
    fetchDashboardData()
  }, [fetchDashboardData])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="grid gap-6 px-[40px] py-[24px] bg-white sm:bg-transparent">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
        <div className="md:col-span-1 lg:col-span-2 ">
          <div className='flex items-center justify-between mb-4'>
          <h3 className=" font-heading-2">My Cards</h3>
          <Button variant={'link'} className='text-[#343C6A] p-0 text-[17px] font-[600] capitalize :hover no-underline'>
                see all
          </Button>
          </div>
          <div className="flex gap-[40px] items-center flex-nowrap w-[85vw]">
            {cards.map((card,index) => (
              <CardInfo 
              key={card.id} 
              {...card} 
              isFirstCard={index === 0}
              style={index === 0 ? {
                backgroundImage: `url(${cardBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              } : undefined}
            />
            ))}
          </div>

        
        </div>

        <div className="md:col-span-2 lg:col-span-1">
          <RecentTransactions transactions={transactions} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {weeklyActivity && weeklyActivity.length > 0 && (
          <div className="md:col-span-2 lg:col-span-2">
            <WeeklyActivity data={weeklyActivity} />
          </div>
        )}

        {statistics && (
          <div className="md:col-span-1 lg:col-span-1">
            <ExpenseStatistics data={statistics} />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
        <div className="md:col-span-1 lg:col-span-1">
          <QuickTransfer users={quickTransfer.users} isLoading={isLoading} />
        </div>
        <div className="md:col-span-2 lg:col-span-2">
          <BalanceHistory
            data={[
              { month: 'Jan', balance: 400 },
              { month: 'Feb', balance: 600 },
              { month: 'Mar', balance: 500 },
              { month: 'Apr', balance: 700 },
              { month: 'May', balance: 400 },
              { month: 'Jun', balance: 600 },
            ]}
          />
        </div>
      </div>
    </div>
  )
}
