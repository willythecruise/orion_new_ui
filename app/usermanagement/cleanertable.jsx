import {Cleancolumns } from "../ui/columndef"
import { DataTable } from "../ui/cleanertable"
import { cleandata } from "./cleanertabledata"
async function getData() {
  // Fetch data from your API here.
  return cleandata
    // ...
  
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={Cleancolumns} data={data} />
    </div>
  )
}
