import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  // import {  HomeIcon} from "lucide-react"
  import Link from "next/link"
  import {RowsIcon, HomeIcon, PersonIcon,ListBulletIcon, ChatBubbleIcon, FileIcon, Component1Icon} from "@radix-ui/react-icons"
  import React from 'react'
  
  const Sidebar = () => {
    return (
        <Sheet >
        <SheetTrigger><RowsIcon width={24} className="p-1 rounded-md" height={24}/></SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="m-3">
            <SheetTitle className="text-highlight" >System Management </SheetTitle>
            
          </SheetHeader>
          <div className="flex  text-gray-800 flex-col items-start">
          <Link href={"/dashboard"} className="flex  hover:bg-blue-100   rounded-md w-full gap-2 m-3 p-2 items-center">
          <HomeIcon></HomeIcon>
          <p className="text-xs">Overview</p>
          </Link>
          <Link href={"/facilities"} className="flex  hover:bg-blue-100   rounded-md w-full gap-2 m-3 p-2 items-center">
          <Component1Icon></Component1Icon>
          <p className="text-xs">Facility Management</p>
          </Link>
          <Link href={"/workschedule"} className="flex  hover:bg-blue-100   gap-2 t rounded-md w-full m-3 p-2 items-center">
          <ListBulletIcon></ListBulletIcon>
          <p className="text-xs">Work Schedule</p>
          </Link>
          <Link href={"/usermanagement"} className="flex  hover:bg-blue-100   rounded-md w-full gap-2 m-3 p-2 items-center">
          <PersonIcon></PersonIcon>
          <p className="text-xs">User Management</p>
          </Link>
          <Link href={"#"} className="flex  hover:bg-blue-100   rounded-md w-full gap-2 m-3 p-2 items-center">
          <FileIcon></FileIcon>
          <p className="text-xs">Inventory Management</p>
          </Link>
          <Link href={"#"} className="flex gap-2  hover:bg-blue-100    rounded-md w-full m-3 p-2 items-center">
          <ChatBubbleIcon></ChatBubbleIcon>
          <p className="text-xs">Feedback</p>
          </Link>
          <Link href={"#"} className="flex gap-2  hover:bg-blue-100   rounded-md w-full m-3 p-2 items-center">
          <HomeIcon></HomeIcon>
          <p className="text-xs">Training</p>
          </Link>
          </div>
        </SheetContent>
      </Sheet>
      
    )
  }
  
  export default Sidebar