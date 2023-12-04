import React from "react"

interface CertifiedCardProps{
    children: React.ReactNode
}
const CertifiedCard: React.FC<CertifiedCardProps> = ({children}) => {
    return (
        <div className="w-full md:w-[150px] p-[15px] bg-[#FFF] text-[14px] md:text-[21px] rounded-[5px] md:rounded-[10px] text-[#5F6163] border leading-[140%] font-normal customShadow">
            {children}
        </div>
    )
}
export default CertifiedCard