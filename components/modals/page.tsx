import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"
import { ReaderIcon } from "@radix-ui/react-icons"

export function Modal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size={"sm"}>
                    <ReaderIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-95" />
                    <span>Makna</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-sm text-slate-700 dark:text-slate-300">Makna</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-2 items-center justify-center py-4 -mt-6">
                    <span className="text-justify text-sm">
                        Allah, tidak ada ilah (yang berhak disembah) melainkan Dia, yang hidup kekal lagi terus menerus mengurus (makhluk-Nya). Dia tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa’at di sisi-Nya tanpa seizin-Nya. Dia mengetahui apa-apa yang di hadapan mereka dan di belakang mereka. Mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dia tidak merasa berat memelihara keduanya. Dan Dia Maha Tinggi lagi Maha besar.
                    </span>
                    <hr />
                    <div className="flex flex-col gap-1">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Keutamaan</span>
                        <DialogDescription className="italic text-justify dark:text-gray-300">
                            Siapa yang membacanya ketika petang, maka ia akan dilindungi (oleh Allah dari berbagai gangguan) hingga pagi. Siapa yang membacanya ketika pagi, maka ia akan dilindungi hingga petang. [HR. Al Hakim (1: 562). Syaikh Al Albani menshahihkan hadits tersebut dalam Shahih At Targhib wa At Tarhib no. 655]
                        </DialogDescription>
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Tutup
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
