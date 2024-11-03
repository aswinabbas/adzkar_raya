import { DotBackground } from '@/components/background/page'
import { MovingCards } from '@/components/movingCards/page'
import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <>
      <DotBackground />
      <MovingCards />
    </>
    // <div className='flex items-center justify-center gap-4 h-svh w-svw'>
    //   <Link href={"/adzkar/morning"}>
    //     <Button variant="outline" size={"lg"}>
    //       <SunIcon />
    //     </Button>
    //   </Link>
    //   <Link href={"/adzkar/afternoon"}>
    //     <Button variant="outline" size={"lg"}>
    //       <MoonIcon />
    //     </Button>
    //   </Link>
    // </div>
  )
}

export default Home