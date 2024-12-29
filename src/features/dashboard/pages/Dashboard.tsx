import { useDashboardStore } from '@/stores/dashboard'
import { useEffect } from 'react'
import { BalanceHistory } from '../components/BalanceHistory'
import { CardInfo } from '../components/CardInfo'
import { ExpenseStatistics } from '../components/ExpenseStatistics'
import { QuickTransfer } from '../components/QuickTransfer'
import { WeeklyActivity } from '../components/WeeklyActivity'

export function Dashboard() {
  const {
    weeklyActivity,
    statistics,
    quickTransfer,
    isLoading,
    error,
    cards,
    fetchDashboardData,
  } = useDashboardStore()

  console.log(cards)

  useEffect(() => {
    fetchDashboardData()
  }, [fetchDashboardData])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="grid gap-6 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
        <div className="md:col-span-1 lg:col-span-2 ">
          <h3 className="mb-4 font-heading-2">My Cards</h3>
          <div className="flex gap-4 items-center">
            {cards.map((card) => (
              <CardInfo key={card.id} {...card} />
            ))}
          </div>
        </div>

        <div className="md:col-span-2 lg:col-span-1 ">
          <h2 className="font-heading-2">Others</h2>
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
