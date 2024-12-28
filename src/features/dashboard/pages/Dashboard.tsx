import { useDashboardStore } from '@/stores/dashboard'
import { useEffect } from 'react'
import { BalanceHistory } from '../components/BalanceHistory'
import { ExpenseStatistics } from '../components/ExpenseStatistics'
import { WeeklyActivity } from '../components/WeeklyActivity'

export function Dashboard() {
  const { weeklyActivity, statistics, isLoading, error, fetchDashboardData } =
    useDashboardStore()

  useEffect(() => {
    fetchDashboardData()
  }, [fetchDashboardData])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="grid gap-6 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
        {/* {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))} */}

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
