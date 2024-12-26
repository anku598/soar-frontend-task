import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

interface BalanceData {
  month: string
  balance: number
}

interface BalanceHistoryProps {
  data: BalanceData[]
}

export function BalanceHistory({ data }: BalanceHistoryProps) {
  return (
    <div className="h-[300px] rounded-lg border bg-white p-4">
      <h3 className="mb-4 text-lg font-medium">Balance History</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#3B82F6"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
