"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal,ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const Cleancolumns = [
 
  {
    accessorKey: "roomname",
    header: ({ column }) => {
      return (
        <Button
      
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Room
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "inspector",
    header: "Inspector",
  },
  {
    accessorKey: "cleaner",
    header: "Cleaner",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.id)}
            >
              View Summary
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {/* <DropdownMenuItem>View Cleaner</DropdownMenuItem>
            <DropdownMenuItem>Delete Cleaner</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
