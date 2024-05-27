import Sidebar from "../ui/sheet";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
export default function DashboardLayout({ children }) {
    return (
      <html lang="en">
        <body>

       <div className="p-3 m-3 bg-slate-100 rounded-md">  <Sidebar/></div>
       <Card className="m-3 p-3">
      <CardHeader>
        <CardTitle className="text-blue-400">Welcome Manager!
</CardTitle>
        <CardDescription>Keep track of all Cleaning Activities, Work Orders, Cleaners and Inspectors.</CardDescription>
      </CardHeader>
      </Card>
            {children}</body>
      </html>
    );
  }