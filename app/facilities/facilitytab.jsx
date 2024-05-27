import {Cleancolumns } from "../ui/facilitycolumndef"
import { DataTable } from "../ui/cleanertable"
import { facilitydata } from "./facilitydata"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
async function getData() {
  // Fetch data from your API here.
  return facilitydata
    // ...
  
}

export default async function FacilityMap() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <Tabs className="m-4 " defaultValue="facility">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger  value="cleaner">Facility</TabsTrigger>
          <TabsTrigger value="inspector">Map</TabsTrigger>
        </TabsList>
        <TabsContent value="facility">
        <DataTable columns={Cleancolumns} data={data}/>
        </TabsContent>
        <TabsContent value="map">
        <DataTable  columns={Cleancolumns} data={data}/>
        </TabsContent>
      </Tabs>
    </div>
  )
}


  