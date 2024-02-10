"use client";

import { Menu } from "lucide-react"
import { Poppins } from "next/font/google";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";

const font = Poppins({
    weight: "600",
    subsets: ["latin"]
});

export const Navbar = () =>{
    return(
        <div className="fixed w-full justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary">
           <div className="flex items-center">
            <Menu className="block md:hidden"/>
           <Link href="/">
            <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary",
                          font.className 
                           )}>
                compaion.ai
            </h1>
           </Link>
           </div>
           <div className="flex items-center gap-x-3">
            <UserButton/>

           </div>
        </div>
    )
}
