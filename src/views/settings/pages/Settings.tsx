import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { EditProfileForm } from '../components/EditProfileForm'

export function Settings() {
  const tabTriggerStyles =
    'text-[#718EBF] text-[13px] sm:text-[16px] data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary border-b-2 border-transparent data-[state=active]:shadow-none rounded-none'

  return (
    <div className="container mx-auto px-4 sm:px-10 py-6 ">
      <div className="bg-[#FFFFFF] rounded-[25px] p-8">
        <Tabs defaultValue="edit-profile" className="w-full">
          <TabsList className="mb-8 bg-transparent border-none">
            <TabsTrigger className={tabTriggerStyles} value="edit-profile">
              Edit Profile
            </TabsTrigger>
            <TabsTrigger className={tabTriggerStyles} value="preferences">
              Preferences
            </TabsTrigger>
            <TabsTrigger className={tabTriggerStyles} value="security">
              Security
            </TabsTrigger>
          </TabsList>

          <TabsContent value="edit-profile">
            <EditProfileForm />
          </TabsContent>

          <TabsContent value="preferences">
            {/* <PreferencesForm /> */}
          </TabsContent>

          <TabsContent value="security">{/* <SecurityForm /> */}</TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
