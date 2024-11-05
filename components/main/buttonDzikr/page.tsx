import { EveningIcon } from '@/libs/icons/moon/page'
import { MorningIcon } from '@/libs/icons/morning/page'
import Link from 'next/link'
import React from 'react'

const ButtonDzikr = () => {
    return (
        <div className="flex fixed bottom-40 left-1/2 transform -translate-x-1/2 items-center justify-center gap-4">
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
        </div>
    )
}

export default ButtonDzikr