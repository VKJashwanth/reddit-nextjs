import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

interface iAppProps {
    userImage: string | null
}

export function UserDropdown({userImage}: iAppProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
                    <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />

                    <img
                        src={userImage ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZTPCiCuoK1C3vIcRtT0VWikKt4ced2mDzlWu1SiadEQ&s"}
                        alt="Avatar"
                        className="rounded-full h-8 w-8 hidden lg:block"
                    />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuItem>
                    <Link href={"/r/create"} className="w-full"> 
                        Create Community
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={"/create"} className="w-full"> 
                        Create Post
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={"/settings"} className="w-full"> 
                        Settings
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <LogoutLink className="w-full">Log out</LogoutLink>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}