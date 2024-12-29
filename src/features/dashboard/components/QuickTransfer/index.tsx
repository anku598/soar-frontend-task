import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
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
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full relative"
      >
        <div className="h-[345px] flex flex-col overflow-x-hidden items-center justify-center rounded-[25px] bg-white p-6">
          <div className=" w-full mb-6 pb-2">
            <CarouselContent className="-ml-1">
              {users.map((user) => (
                <CarouselItem
                  key={user.id}
                  className="flex flex-col items-start md:basis-1/2 lg:basis-1/3"
                >
                  <Avatar className="w-12 h-12 mb-2">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="object-cover"
                    />
                  </Avatar>
                  <div className="flex flex-col items-center ">
                    <span className="text-[16px] font-[#232323]">
                      {user.name}
                    </span>
                    <span className="text-[15px] text-[#718EBF] capitalize">
                      {user.role}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
          </div>

          <div className=" flex items-center gap-6">
            <div className="text-[1rem] text-[#8BA3CB]">Write amount</div>
            <div className="relative mt-0">
              <Input
                type="text"
                placeholder="525.50"
                className="pl-5 pr-4 py-4 w-full bg-[#F5F7FA] border-none rounded-[2.5rem] focus:ring-0 focus:ring-gray-200 focus:outline-none text-[0.98rem] text-[#8BA3CB] placeholder-[#8BA3CB]"
              />
              <Button
                className="absolute rounded-full mt-0 top-[50%] translate-y-[-50%] h-[50px] right-0"
                size="lg"
              >
                Send <span className="ml-2">→</span>
              </Button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}
