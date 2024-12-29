import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
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
    <div>
      <h3 className="mb-4 font-heading-2">Balance History</h3>
      <div className="h-[345px] rounded-[25px] bg-white p-4">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={true}
              stroke="#E2E8F0"
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              style={{
                fontSize: '13px',
                fontFamily: 'Inter',
                fill: '#718EBF',
              }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              style={{
                fontSize: '13px',
                fontFamily: 'Inter',
                fill: '#718EBF',
              }}
              domain={[0, 'dataMax + 100']}
              ticks={[0, 200, 400, 600, 800]}
            />
            <Area
              type="monotone"
              dataKey="balance"
              stroke="none"
              fill="url(#paint0_linear)"
            />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#1814F3"
              strokeWidth={3}
              dot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
