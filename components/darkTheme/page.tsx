"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function DarkMode() {
    // const { setTheme } = useTheme();

    const { theme, setTheme } = useTheme();

    const handleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <Button variant="outline" size="icon" onClick={handleTheme}>
            {theme === "light" ? (
                <SunIcon className="h-[1.2rem] w-[1.2rem] transition-transform transform rotate-0 scale-100" />
            ) : (
                <MoonIcon className="h-[1.2rem] w-[1.2rem] transition-transform transform rotate-90 scale-100" />
            )}
        </Button>
    )
}
