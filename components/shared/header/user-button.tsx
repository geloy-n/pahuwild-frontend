import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import { checkAuth } from "@/lib/check-auth";
import { signout } from "@/actions/user-actions";

const UserButton = async () => {
  const session = await checkAuth();

  if (!session) {
    return (
      <Button
        asChild
        variant="ghost"
        className=" text-white hover:bg-amber-500 hover:text-white"
      >
        <Link href="/sign-in">
          <span>
            <UserIcon />
          </span>
          Sign In
        </Link>
      </Button>
    );
  }

  const firstInitial = session.name?.charAt(0).toUpperCase() ?? "U";

  return (
    <div className="flex gap-2 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="relative w-8 h-8 rounded-full ml-2 flex items-center justify-center bg-amber-500 hover:bg-amber-300 hover:text-white"
            >
              {firstInitial}
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <div className="text-sm font-medium leading-none">
                {session.name}
              </div>
              <div className="text-sm text-muted-foreground leading-none">
                {session.email}
              </div>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuItem>
            <Link href="/user/current-bookings" className="w-full">
              Bookings
            </Link>
          </DropdownMenuItem>

          {session.role === "ADMIN" && (
            <DropdownMenuItem>
              <Link href="/admin/current-bookings" className="w-full">
                Admin
              </Link>
            </DropdownMenuItem>
          )}

          <DropdownMenuItem className="p-0 mb-1">
            <form action={signout} className="w-full">
              <Button
                className="w-full py-4 px-2 h-4 justify-start"
                variant="ghost"
              >
                Sign Out
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserButton;
