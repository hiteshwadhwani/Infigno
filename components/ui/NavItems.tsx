'use client'

import React from "react"

interface NavItemsProps{
    children: React.ReactNode
}

const NavItems: React.FC<NavItemsProps> = ({children}) => {
    return (
        <div className="cursor-pointer hover:opacity-70 transition">
            {children}
        </div>
    )
}
export default NavItems