import { Statistics } from '@/services/api/types'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'

interface ExpenseStatisticsProps {
  data: Statistics
}

const EXPENSE_COLORS: { [key: string]: string } = {
  entertainment: '#343C6A',
  billExpense: '#FC7900',
  investment: '#396AFF',
  others: '#232323',
} as const

export function ExpenseStatistics({ data }: ExpenseStatisticsProps) {
  const chartData = [
    {
      name: 'Entertainment',
      value: data.entertainment,
      category: 'entertainment',
    },
    { name: 'Bill Expense', value: data.billExpense, category: 'billExpense' },
    { name: 'Investment', value: data.investment, category: 'investment' },
    { name: 'Others', value: data.others, category: 'others' },
  ]

  return (
    <div>
      <h3 className="mb-4 font-heading-2">Expense Statistics</h3>
      <div className="h-[345px] rounded-[25px] bg-white sm:p-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={140}
              paddingAngle={8}
              fill="#8884d8"
              dataKey="value"
              label={({
                name,
                value,
                cx,
                cy,
                midAngle,

                outerRadius,
              }) => {
                const RADIAN = Math.PI / 180
                // Position text slightly towards the outer edge
                const radius = outerRadius * 0.6
                const x = cx + radius * Math.cos(-midAngle * RADIAN)
                const y = cy + radius * Math.sin(-midAngle * RADIAN)

                return (
                  <text
                    x={x}
                    y={y}
                    fill="white"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{ fontSize: '13px' }}
                  >
                    <tspan x={x} dy="-0.5em" fontWeight="bold">
                      {value}%
                    </tspan>
                    <tspan x={x} dy="1.5em">
                      {name}
                    </tspan>
                  </text>
                )
              }}
            >
              {chartData.map((entry) => (
                <Cell
                  key={`cell-${entry.category}`}
                  fill={EXPENSE_COLORS[entry.category]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
