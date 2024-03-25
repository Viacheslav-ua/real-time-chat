import { Button } from "@/shared/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
} from "@/shared/ui/sheet";
import { Link, Menu } from "lucide-react";

export function Layout({
  logo,
  nav,
  profile,
  actions,
}: {
  logo?: React.ReactNode;
  nav?: React.ReactNode;
  profile?: React.ReactNode;
  actions?: React.ReactNode;
}) {
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="md:hidden mr-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col justify-start">
              <SheetHeader className=" border-b pb-5 mb-5">{logo}</SheetHeader>
              {nav}
              <div className="mt-10 pt-4 border-t flex justify-between ">
                {profile}
                {actions}
              </div>
              
            </SheetContent>
          </Sheet>
        </div>

        <div className="mr-16 hidden md:flex">{logo}</div>
        <div className="items-center flex-1 flex">
          <div className="hidden md:flex">{nav}</div>
          <div className="flex flex-1 items-center justify-end space-x-8 ">
            {actions}
            {profile}
          </div>
        </div>
      </div>
    </header>
  );
}
