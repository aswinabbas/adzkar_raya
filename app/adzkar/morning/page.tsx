"use client"

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    // CarouselNext,
    // CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import { Modal } from "@/components/modals/page"
import { DarkMode } from "@/components/darkTheme/page"

const Home = () => {
    const [api, setApi] = React.useState<CarouselApi>()
    // const [current, setCurrent] = React.useState(0)
    // const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        // setCount(api.scrollSnapList().length)
        // setCurrent(api.selectedScrollSnap() + 1)

        // api.on("select", () => {
        //     setCurrent(api.selectedScrollSnap() + 1)
        // })
    }, [api])


    return (
        <div className='flex items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>

            <div className="mx-auto max-w-xs my-auto">
                <Carousel
                    setApi={setApi}
                    className="w-full max-w-xs"
                    opts={{
                        loop: true
                    }}
                >
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <Card>
                                    <div className="flex justify-between items-center px-4 mt-4">
                                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">Membaca Ayat Kursi</span>
                                        <DarkMode />
                                    </div>
                                    <CardContent className="flex flex-col h-[390px] items-center justify-center p-4">
                                        <p className="text-xl font-normal text-justify" style={{ direction: "rtl" }}>اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ، لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ، لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ، مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ، يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ، وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ، وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ، وَلَا يَئُودُهُ حِفْظُهُمَا، وَهُوَ الْعَلِيُّ الْعَظِيمُ</p>
                                    </CardContent>
                                    <div className="flex justify-between items-center px-4 mb-4">
                                        <span className="text-sm text-gray-600 dark:text-gray-300">Dibaca 1x</span>
                                        <Modal />
                                    </div>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* <CarouselPrevious />
                    <CarouselNext /> */}
                </Carousel>
                {/* <div className="py-2 text-center text-sm text-muted-foreground">
                    Slide {current} of {count}
                </div> */}
            </div>

        </div>
    )
}

export default Home