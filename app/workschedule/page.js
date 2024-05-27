import { DataTable } from "../ui/cleanertable";
import { Cleancolumns } from "../ui/workcolumndef";
import { workdata } from "./workdata";
export default function WorkOrderPage() {
    return (
        <> 
         {/* <Sidebar/>  */}
     {/* <NavigationMenuDemo/> */}
      <main className="flex min-h-screen  flex-col w-screen">
  <DataTable columns={Cleancolumns}  data={workdata}/>
   
   
      </main>
      </>
    );
  }