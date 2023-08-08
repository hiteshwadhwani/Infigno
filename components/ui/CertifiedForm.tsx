'use client'
import {Input} from "@/components/ui/input"
import { Button } from "./button"

const CertifiedForm = () => {
    return (
        <div className="bg-[#034DB3] py-8 px-6 rounded-2xl h-fit flex flex-col justify-center gap-y-6 md:mx-0 mx-2 mb-2 md:mb-0">
            <div className="text-[#FDE74C] text-[36px] font-semibold">
                Book a Free Demo Session
            </div>
            <div className="font-light text-[18px] text-white">
                Tell us more about youreself & we will get back to you
            </div>
            <form action="" className="flex flex-col gap-y-3">
                <Input className="px-6 py-4 text-slate-500 font-light bg-white rounded-xl" placeholder="Full Name" type="text" />
                <Input className="px-6 py-4 text-slate-500 font-light bg-white rounded-xl" placeholder="Full Name" type="text" />
                <Input className="px-6 py-4 text-slate-500 font-light bg-white rounded-xl" placeholder="Full Name" type="text" />
                <Input className="px-6 py-4 text-slate-500 font-light bg-white rounded-xl" placeholder="Full Name" type="text" />

            </form>
            <Button className="bg-[#FDE74C] text-center w-full rounded-xl text-[#0047AB] hover:bg-[#FDE74C] hover:opacity-80 transition">
                Book Session
            </Button>
        </div>
    )
}
export default CertifiedForm