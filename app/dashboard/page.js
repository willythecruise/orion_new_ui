// import Navigationmenu from "../ui/navigationmenu";
// import Sidebar from "../ui/sheet";
import {NavigationMenuDemo} from "../ui/navigationmenu";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { TabsDemo } from "../ui/dashboardchart";
  import { Overview } from "./overview";
// import { FileIcon, PersonIcon  } from "@radix-ui/react-icons";
import { FileJson,User2,User, UserCheck,LocateIcon,MapPin,Component, Archive,FileArchive, Check } from "lucide-react";
//   import { FileIcon } from "@radix-ui/react-icons";
export default function Dashboard() {
    return (
        <> 
         {/* <Sidebar/>  */}
     {/* <NavigationMenuDemo/> */}
      <main className="flex min-h-screen  flex-col w-screen">
      <Overview/>
   
   
      </main>
      </>
    );
  }