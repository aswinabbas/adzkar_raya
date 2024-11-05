import React from 'react'

const MainTitle = () => {
    return (
        <div className="flex flex-col gap-0 absolute top-48 transform -translate-y-1/2 text-center">

            <h1 className="text-4xl font-semibold text-gray-700 dark:text-gray-300">Adzkarraya</h1>
            <h2 className="text-base font-light text-gray-400 dark:opacity-50">Dzikir Pagi dan Petang</h2>

            {/* Gradients */}
            <div className="relative inset-x-20 top-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="relative inset-x-20 top-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent h-px w-3/4" />
            <div className="relative inset-x-60 top-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="relative inset-x-60 top-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent h-px w-1/4" />

            <h2 className="text-xs text-justify px-6 font-light text-gray-400 mt-14">
                “Dzikir pagi dan petang seperti baju besi, semakin bertambah ketebalannya maka pemiliknya semakin tidak terkena (bahaya). Bahkan kekuatan baju besi itu bisa sampai memantulkan kembali anak panah sehingga berbalik mengenai pemanahnya sendiri.”
            </h2>
            <h2 className="text-xs text-justify px-6 font-light text-gray-400 mt-1">
                ~ <span className='font-bold'>Ibnul Qayyim</span>, <span className='italic'>Rahimahullah.</span>
            </h2>
        </div>
    )
}

export default MainTitle