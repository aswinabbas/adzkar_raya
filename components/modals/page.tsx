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

interface PROPSDATATYPE {
    makna: string,
    keutamaan: string
}

export function Modal(props: PROPSDATATYPE) {
    const { makna, keutamaan } = props;

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
                    <span className="text-justify text-sm max-h-64 overflow-y-auto">
                        {makna}
                    </span>
                    <hr />
                    <div className="flex flex-col gap-1">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Keutamaan</span>
                        <DialogDescription className="italic text-justify dark:text-gray-300 max-h-56 overflow-y-auto">
                            {keutamaan.split("\n").map((line, index) => (
                                <p
                                    key={index}
                                    className="mb-2"
                                    dangerouslySetInnerHTML={{ __html: line }}
                                />
                            ))}
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
