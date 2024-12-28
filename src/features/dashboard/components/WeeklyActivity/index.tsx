import { WeeklyActivity as WeeklyActivityType } from '@/services/api/types'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'

interface WeeklyActivityProps {
  data: WeeklyActivityType[]
}

export function WeeklyActivity({ data }: WeeklyActivityProps) {
  return (
    <div>
      <h3 className="mb-4 font-heading-2">Weekly Activity</h3>
      <div className="h-[345px] rounded-[25px] bg-white p-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={12}>
            <Legend
              verticalAlign="top"
              align="right"
              layout="horizontal"
              wrapperStyle={{
                paddingBottom: '20px',
              }}
              formatter={(value) => (
                <span
                  style={{
                    color: '#718EBF',
                    fontSize: '15px',
                    fontFamily: 'Inter',
                    marginRight: '10px',
                    textTransform: 'capitalize',
                  }}
                >
                  {value}
                </span>
              )}
              iconType="circle"
            />
            <CartesianGrid vertical={false} stroke="#F3F3F5" strokeWidth={1} />
            <Bar
              dataKey="deposits"
              fill="#396AFF"
              radius={30}
              barSize={window.innerWidth <= 768 ? 7 : 15}
            />
            <Bar
              dataKey="withdrawals"
              fill="#232323"
              radius={30}
              barSize={window.innerWidth <= 768 ? 7 : 15}
            />

            <XAxis
              dataKey="day"
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
              ticks={[0, 100, 200, 300, 400, 500, 600]}
              style={{
                fontSize: '13px',
                fontFamily: 'Inter',
                fill: '#718EBF',
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
