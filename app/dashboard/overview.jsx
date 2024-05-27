import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { TabsDemo } from "../ui/dashboardchart";
// import { FileIcon, PersonIcon  } from "@radix-ui/react-icons";
import { FileJson,User2,User, UserCheck,LocateIcon,MapPin,Component, Archive,FileArchive, Check } from "lucide-react";
//   import { FileIcon } from "@radix-ui/react-icons";
export const Overview=()=>{

    return(
          //  <Sheet/> */}
    <div>
        <div className="grid grid-cols-2 p-3  sm:grid-cols-3 md:grid-cols-4 sm:gap-6">
          <Card>
            <CardHeader className="pb-2">
            <div className="flex justify-between"> 
              <CardDescription>Inspectors</CardDescription>
            <UserCheck width={24} height={24}/>
             </div>
              <CardTitle className="text-4xl">12</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
               
              </div>
            </CardContent>
            <CardFooter>
              {/* <Progress value={25} aria-label="25% increase" /> */}
            </CardFooter>
          </Card>

          <Card className="">
            <CardHeader className="pb-2">
            <div className="flex justify-between"> 
              <CardDescription>Cleaners</CardDescription>
            <User width={24} height={24}/>
             </div>
              <CardTitle className="text-4xl">16</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
               
              </div>
            </CardContent>
            <CardFooter>
              {/* <Progress value={25} aria-label="25% increase" /> */}
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
             <div className="flex justify-between"> 
              <CardDescription>Total Tasks</CardDescription>
            <FileJson width={24} height={24}/>
             </div>
              <CardTitle className="text-4xl">32</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
            
              </div>
            </CardContent>
            <CardFooter>
              {/* <Progress value={25} aria-label="25% increase" /> */}
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
            <div className="flex justify-between"> 
              <CardDescription>Total Rooms</CardDescription>
            <MapPin width={24} height={24}/>
             </div>
              <CardTitle className="text-4xl">69</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
              
              </div>
            </CardContent>
            <CardFooter>
              {/* <Progress value={25} aria-label="25% increase" /> */}
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
            <div className="flex justify-between"> 
              <CardDescription>Completed Tasks</CardDescription>
            <Check width={24} height={24}/>
             </div>
              <CardTitle className="text-4xl">23</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
              
              </div>
            </CardContent>
            <CardFooter>
              {/* <Progress value={25} aria-label="25% increase" /> */}
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
            <div className="flex justify-between"> 
              <CardDescription>Cleaning Items</CardDescription>
            <Component width={24} height={24}/>
             </div>
              <CardTitle className="text-4xl">67</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
             
              </div>
            </CardContent>
            <CardFooter>
              {/* <Progress value={25} aria-label="25% increase" /> */}
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="pb-2">
               <div className="flex justify-between"> 
              <CardDescription>Pending Tasks</CardDescription>
            <Archive width={24} height={24}/>
             </div>
              <CardTitle className="text-4xl">23</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
             
              </div>
            </CardContent>
            <CardFooter>
              {/* <Progress value={25} aria-label="25% increase" /> */}
            </CardFooter>
          </Card>
</div>

  <div className="mt-6 flex justify-center">
  <TabsDemo/>
  </div>
    </div>
    )
}