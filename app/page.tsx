import { DarkMode } from '@/components/darkTheme/page'
import ButtonDzikr from '@/components/main/buttonDzikr/page'
import MainFooter from '@/components/main/mainFooter/page'
import MainTitle from '@/components/main/mainTitle/page'
import { EveningIcon } from '@/libs/icons/moon/page'
import { MorningIcon } from '@/libs/icons/morning/page'
import Link from 'next/link'

const Home = () => {
  const isFriday = new Date().getDay() === 5;
  return (
    <div className="h-screen overflow-hidden w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">

      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
      </div>

      {/* Mode - Positioned in the top-right corner */}
      <div className="flex justify-between items-center fixed top-4 right-1 w-full px-4">
        <span className={isFriday ? 'text-xs text-gray-400 dark:text-gray-500 opacity-95 text-muted-foreground bg-gray-300 dark:bg-gray-100 p-1 px-2 rounded-sm' : 'opacity-0'}>Jangan Lupa perbanyak <span className='font-bold'>shalawat</span> di hari jumat</span>
        <DarkMode />
      </div>

      {/* Title - Centered in the middle */}
      <MainTitle />

      {/* Button Dzikir - Positioned fixed at the bottom */}
      <ButtonDzikr />

      {/* Footer  */}
      <MainFooter />
    </div>

  )
}

export default Home