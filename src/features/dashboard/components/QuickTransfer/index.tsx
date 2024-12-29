import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface TransferUser {
  id: string
  name: string
  role: string
  avatar: string
}

interface QuickTransferProps {
  users: TransferUser[]
  isLoading?: boolean
}

export function QuickTransfer({ users, isLoading }: QuickTransferProps) {
  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <h2 className="mb-4 font-heading-2">Quick Transfer</h2>
      <div className="h-[345px] rounded-[25px] bg-white p-4">
        <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex flex-col items-center min-w-[100px]"
            >
              <Avatar className="w-16 h-16 mb-2">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="object-cover"
                />
              </Avatar>
              <span className="text-sm font-medium">{user.name}</span>
              <span className="text-xs text-gray-500">{user.role}</span>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <Input
            type="number"
            placeholder="Enter amount"
            className="text-lg p-4"
          />
          <Button className="w-full" size="xl">
            Send <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
