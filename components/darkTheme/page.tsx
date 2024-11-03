"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function DarkMode() {
    const { resolvedTheme, setTheme } = useTheme();

    const handleTheme = () => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
    };

    // Use default to 'light' if resolvedTheme is not yet set
    const isLightMode = resolvedTheme !== "dark";

    return (
        <Button variant="outline" size="icon" onClick={handleTheme}>
            {isLightMode ? (
                <SunIcon className="h-[1.2rem] w-[1.2rem] transition-transform transform rotate-0 scale-100" />
            ) : (
                <MoonIcon className="h-[1.2rem] w-[1.2rem] transition-transform transform rotate-90 scale-100" />
            )}
        </Button>
    );
}
