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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))} */}

        {weeklyActivity && weeklyActivity.length > 0 && (
          <WeeklyActivity data={weeklyActivity} />
        )}

        {statistics && <ExpenseStatistics data={statistics} />}

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
  )
}
