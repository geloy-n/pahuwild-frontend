import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, House } from "lucide-react";
import Link from "next/link";
import UserButton from "./user-button";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-2">
        <Button
          asChild
          variant="ghost"
          className=" text-white hover:bg-amber-500 hover:text-white"
        >
          <Link href="/cabin">
            <House />
            Cabins
          </Link>
        </Button>
        <UserButton />
      </nav>

      <nav className="md:hidden ">
        <Sheet>
          <SheetTrigger className="align-middle">
            <AlignJustify />
          </SheetTrigger>
          <SheetContent className="bg-teal-900 flex flex-col items-start pl-2">
            <SheetTitle className="text-2xl font-bold mt-4 text-white">
              Menu
            </SheetTitle>
            <Button asChild variant="ghost" className="text-white">
              <Link href="/cabin">
                <House />
                Cabins
              </Link>
            </Button>
            <UserButton />
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
