import Sidebar from "../ui/sheet";
import { CreateWorkOrder } from "./addworkorder";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { CalendarForm } from "../ui/workdate";
export default function DashboardLayout({ children }) {
    return (
      <html lang="en">
        <body>

       <div className="p-3 m-3 bg-slate-100 rounded-md">  <Sidebar/></div>
       <Card className="m-3 p-3">
      <CardHeader>
        <CardTitle className="text-blue-400">Welcome Partner!
</CardTitle>
        <CardDescription>Keep track of all Cleaning Activities, Work Orders, Cleaners and Inspectors.</CardDescription>
      </CardHeader>
      </Card>
   <CalendarForm/>
            {children}</body>
      </html>
    );
  }