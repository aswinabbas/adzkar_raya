import { GitHubLogoIcon } from '@radix-ui/react-icons'
import React from 'react'

const MainFooter = () => {
    return (
        <div className="flex justify-between bottom-0 gap-1">
            <span className='text-xs text-gray-400 font-light'>
                <a
                    href="https://donasi.wiz.or.id/campaign/peduli-palestina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 underline ml-1"
                >
                    Donasi 🇵🇸
                </a>
            </span>
            <span className='flex text-xs text-gray-400 font-light mr-10'>
                <a
                    href="https://github.com/aswinabbas/adzkar_raya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 underline mr-2"
                >
                    Source Code
                </a>
                <GitHubLogoIcon />
            </span>

        </div>
    )
}

export default MainFooter