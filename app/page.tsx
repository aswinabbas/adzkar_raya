import { DotBackground } from '@/components/background/page'
import { DarkMode } from '@/components/darkTheme/page'
import { MovingCards } from '@/components/movingCards/page'
import { Button } from '@/components/ui/button'
import { EveningIcon } from '@/libs/icons/moon/page'
import { MorningIcon } from '@/libs/icons/morning/page'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
      </div>

      {/* Mode - Positioned in the top-right corner */}
      <div className="fixed top-4 right-4">
        <DarkMode />
      </div>

      {/* Title - Centered in the middle */}
      <div className="flex flex-col gap-0 absolute top-1/2 transform -translate-y-1/2 text-center">
        <h1 className="text-4xl font-semibold text-gray-700">Adzkarraya</h1>
        <h2 className="text-base font-light text-gray-400">Dzikir Pagi dan Petang</h2>
        <h2 className="text-xs text-justify px-6 font-light text-gray-400 mt-14">
          “Dzikir pagi dan petang seperti baju besi, semakin bertambah ketebalannya maka pemiliknya semakin tidak terkena (bahaya). Bahkan kekuatan baju besi itu bisa sampai memantulkan kembali anak panah sehingga berbalik mengenai pemanahnya sendiri.”
        </h2>
        <h2 className="text-xs text-justify px-6 font-light text-gray-400 mt-1">
          ~ Ibnul Qayyim, Rahimahullah.
        </h2>
      </div>


      {/* Button Dzikir - Positioned fixed at the bottom */}
      <div className="flex fixed bottom-8 left-1/2 transform -translate-x-1/2 items-center justify-center gap-4">
        <Link href={"/adzkar/morning"} className="bg-gray-100 dark:bg-gray-400 p-4 rounded-md">
          <div className="flex flex-col gap-1 items-center">
            <MorningIcon />
            <h2 className="text-gray-500 dark:text-gray-700">Pagi</h2>
          </div>
        </Link>
        <Link href={"/adzkar/afternoon"} className="bg-gray-100 dark:bg-gray-400 p-4 rounded-md">
          <div className="flex flex-col gap-1 items-center">
            <EveningIcon />
            <h2 className="text-gray-500 dark:text-gray-700">Petang</h2>
          </div>
        </Link>
        {/* <MovingCards /> */}
      </div>
    </div>

  )
}

export default Home