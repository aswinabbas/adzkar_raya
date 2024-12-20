import { DarkMode } from '@/components/darkTheme/page'
import ButtonDzikr from '@/components/main/buttonDzikr/page'
import MainFooter from '@/components/main/mainFooter/page'
import MainTitle from '@/components/main/mainTitle/page'
import { DateTime } from 'luxon'

const Home = () => {

  const day = DateTime.now()
    .setZone('Europe/Bucharest')
    .toFormat('cccc');


  return (
    <div className="h-screen overflow-hidden w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">

      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
      </div>

      {/* Mode - Positioned in the top-right corner */}
      <div className="flex justify-between items-center fixed top-4 right-1 w-full px-4">
        <span className={'text-xs text-gray-400 dark:text-gray-500 opacity-0 text-muted-foreground bg-gray-300 dark:bg-gray-100 p-1 px-2 rounded-sm'}>Jangan Lupa perbanyak <span className='font-bold'>shalawat</span> di hari jumat</span>
        <DarkMode />
      </div>

      {/* Title - Centered in the middle */}
      <div className="flex flex-col items-center justify-between gap-16 z-10 -mt-14">
        <MainTitle />
        <ButtonDzikr />
      </div>

      <div className="absolute bottom-14 left-4 w-full">
        <MainFooter />
      </div>
    </div>

  )
}

export default Home