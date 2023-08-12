import React from "react"

interface CertifiedCardProps{
    children: React.ReactNode
}
const CertifiedCard: React.FC<CertifiedCardProps> = ({children}) => {
    return (
        <div className="w-[258px] p-[15px] bg-[#FFF]  rounded-[10px] text-[#004EC1] border text-center md:text-left leading-[140%] font-normal customShadow">
            {children}
        </div>
    )
}
export default CertifiedCard