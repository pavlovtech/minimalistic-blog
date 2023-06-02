"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import Link from 'next/link'
import React from "react";
import { ListItem } from "./ui/list-item";



export function Header() {
  return (
    <header className="p-8 flex justify-center">
      <div>
        <Link href="/" className="inline-flex justify-center items-center">
          <span className="font-bold text-3xl">Minimalistic Blog</span>
        </Link>
      </div>

      <div className="float-right ml-3">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6">
                  <ListItem href="/">
                    Home
                  </ListItem>
                  <ListItem href="/">
                    Projects
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
