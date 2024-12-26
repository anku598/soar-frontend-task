import { Statistics } from '@/services/api/types'
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

interface ExpenseStatisticsProps {
  data: Statistics
}

const COLORS = ['#3B82F6', '#EF4444', '#10B981', '#6B7280']

export function ExpenseStatistics({ data }: ExpenseStatisticsProps) {
  const chartData = [
    { name: 'Entertainment', value: data.entertainment },
    { name: 'Bill Expense', value: data.billExpense },
    { name: 'Investment', value: data.investment },
    { name: 'Others', value: data.others },
  ]

  return (
    <div className="h-[300px] rounded-lg border bg-white p-4">
      <h3 className="mb-4 text-lg font-medium">Expense Statistics</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
