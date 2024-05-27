import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
  
  import { DataTable } from "./cleanertable"
  import { cleandata } from "../usermanagement/cleanertabledata"
  import { Cleancolumns } from "./columndef"
  export function CleanInspect() {
    return (
      <Tabs className="m-4 " defaultValue="cleaner">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger  value="cleaner">Cleaner</TabsTrigger>
          <TabsTrigger value="inspector">Inspector</TabsTrigger>
        </TabsList>
        <TabsContent value="cleaner">
        <DataTable columns={Cleancolumns} data={cleandata}/>
        </TabsContent>
        <TabsContent value="inspector">
        <DataTable  columns={Cleancolumns} data={cleandata}/>
        </TabsContent>
      </Tabs>
    )
  }
  