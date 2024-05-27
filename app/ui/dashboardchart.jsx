import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { DrawerDemo } from "./dashchart"

export function TabsDemo() {
  return (
    <Tabs defaultValue="facilityoverview"  className="sm:w-[600px] h-[400px] w-[400px]  sm:h-[800px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="facilityoverview">Facility Overview</TabsTrigger>
        <TabsTrigger value="cleaneroverview">Cleaner Overview</TabsTrigger>
      </TabsList>
      <TabsContent value="facilityoverview">
        <DrawerDemo/>
      </TabsContent>
      <TabsContent value="cleaneroverview">
        <DrawerDemo/>
      </TabsContent>
    </Tabs>
  )
}
