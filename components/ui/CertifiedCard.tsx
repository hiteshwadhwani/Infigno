import React from "react"

interface CertifiedCardProps{
    children: React.ReactNode
}
const CertifiedCard: React.FC<CertifiedCardProps> = ({children}) => {
    return (
        <div className="w-[258px] p-[20px] bg-[#FFF] shadow-xl rounded-2xl text-[#004EC1] border border-slate-200/80 text-center md:text-left leading-[140%] font-normal">
            {children}
        </div>
    )
}
export default CertifiedCard