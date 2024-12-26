import { WeeklyActivity as WeeklyActivityType } from '@/services/api/types'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

interface WeeklyActivityProps {
  data: WeeklyActivityType[]
}

export function WeeklyActivity({ data }: WeeklyActivityProps) {
  return (
    <div className="h-[300px] rounded-lg border bg-white p-4">
      <h3 className="mb-4 text-lg font-medium">Weekly Activity</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="deposits" fill="#3B82F6" name="Deposits" />
          <Bar dataKey="withdrawals" fill="#EF4444" name="Withdrawals" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
