import DemoPage from "./cleanertable";
import { CleanInspect } from "../ui/usertabs";
export default function Userpage() {
    return (
        <> 
         {/* <Sidebar/>  */}
     {/* <NavigationMenuDemo/> */}
      <main className="flex min-h-screen  flex-col w-screen">
    <CleanInspect/>
   
   
      </main>
      </>
    );
  }