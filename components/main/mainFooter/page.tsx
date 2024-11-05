import { GitHubLogoIcon } from '@radix-ui/react-icons'
import React from 'react'

const MainFooter = () => {
    return (
        <div className="flex flex-col justify-start fixed bottom-5 left-5 gap-1">
            <span className='text-xs text-gray-400 font-light'>🇵🇸 Yuk donasi untuk Palestina
                <a
                    href="https://donasi.wiz.or.id/campaign/peduli-palestina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline ml-1"
                >
                    di sini
                </a>
            </span>
            <span className='flex text-xs justify-start text-gray-400 font-light'>
                <GitHubLogoIcon />
                <a
                    href="https://github.com/aswinabbas/adzkar_raya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 underline ml-1"
                >
                    kode sumber
                </a>
            </span>

        </div>
    )
}

export default MainFooter