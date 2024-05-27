"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
export function AddUser() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="sm" className='text-xs' >Add User</Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>New User</SheetTitle>
          <SheetDescription>
            Make changes to the users list here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid sm:grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" placeholder="Emmanuel William" className="col-span-3" />
          </div>
          <div className="grid items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Email
            </Label>
            <Input id="username"  className="col-span-3" />
          </div>
          <div className="grid items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input type="password" id="password"  className="col-span-3" />
          </div>
          <div className="grid  items-center gap-4">
            <Label htmlFor="phone" className="text-right">
            <div>  PhoneNumber</div>
            </Label>
            <Input id="phone"  className="col-span-3" />
          </div>
          <div className="grid  items-center gap-4">
            <Label htmlFor="country" className="text-right">
              Country
            </Label>
            <Input id="country"  className="col-span-3" />
          </div>
          <div className="grid  items-center gap-4">
            <Label htmlFor="state" className="text-right">
              State
            </Label>
            <Input id="state"  className="col-span-3" />
          </div>
          <div className="grid  items-center gap-4">
            <Label htmlFor="home" className="text-right">
             Home Address
            </Label>
            <Input id="home"  className="col-span-3" />
          </div>
          <div>
          <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Role" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Role</SelectLabel>
          <SelectItem value="cleaner">Cleaner</SelectItem>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="supervisor">SuperVisor</SelectItem>
          <SelectItem value="inspector">Inspector</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
