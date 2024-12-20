import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export const DotBackground = () => {
    return (
        <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
            </div>
            <div className="flex flex-col gap-2">

                <div className='flex items-center justify-center gap-4 h-svh w-svw'>
                    <Link href={"/adzkar/morning"}>
                        <Button variant="outline" size={"lg"}>
                            <SunIcon />
                        </Button>
                    </Link>
                    <Link href={"/adzkar/afternoon"}>
                        <Button variant="outline" size={"lg"}>
                            <MoonIcon />
                        </Button>
                    </Link>
                </div>
            </div>

        </div>
    );
}
