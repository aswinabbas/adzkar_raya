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
import { data } from "@/libs/data/source"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon } from "@radix-ui/react-icons"

interface DZKRDATATYPE {
    id: number,
    arabic: string,
    arabic_latin: string,
    faedah: string,
    narrator: string,
    note: string,
    title: string,
    translated_id: string,
    time: string,
}
const Home = () => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
    const [dzikr, setDzikr] = React.useState<DZKRDATATYPE[]>()

    React.useEffect(() => {
        setDzikr(data.dzikr)
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api]);

    const afternoonDzkr = dzikr?.filter((item: DZKRDATATYPE) => item.time === "" || item.time === "petang")


    return (
        <div className='flex flex-col items-center justify-items-center min-h-screen p-4 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]'>

            <div className="flex item-center justify-center w-full">
                <Link href={"/"}>
                    <Button variant="ghost" size={"icon"}>
                        <ArrowLeftIcon />
                    </Button>
                </Link>
                <div className="w-full text-center text-lg font-semibold text-gray-600 dark:text-gray-400">Dzikir Petang</div>
                <DarkMode />
            </div>
            <div className="mx-auto max-w-xs my-auto">
                <Carousel
                    setApi={setApi}
                    className="w-full max-w-xs"
                    opts={{
                        loop: true,
                        inViewThreshold: 1
                    }}
                >
                    <CarouselContent>
                        {afternoonDzkr?.map((item: DZKRDATATYPE, index) => (
                            <CarouselItem key={index}>
                                <Card>
                                    <div className="flex justify-between items-center px-4 mt-4">
                                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">{item.title}</span>
                                        {/* <DarkMode /> */}
                                    </div>
                                    <CardContent className="flex flex-col h-[390px] items-center justify-center p-4">
                                        {item.arabic.split('\n').map((line, lineIndex) => (
                                            <p
                                                key={lineIndex}
                                                className="text-2xl font-normal text-justify mb-4"
                                                style={{ direction: "rtl" }}
                                            >
                                                {line}
                                            </p>
                                        ))}
                                    </CardContent>
                                    <div className="flex justify-between items-center px-4 mb-4">
                                        <span className="text-sm text-gray-600 dark:text-gray-300">{item.note}</span>
                                        <Modal makna={item.translated_id} keutamaan={item.faedah} />
                                    </div>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <div className="py-2 text-center text-sm text-muted-foreground">
                    Dzikir {current} dari {count}
                </div>
            </div>
            {/* Buttom Bar  */}
            {/* <div className="flex item-center justify-center gap-2 bg-yellow-100 w-screen">
                <div className="w-4 h-4 bg-gray-400">✅</div>
            </div> */}
        </div>
    )
}

export default Home