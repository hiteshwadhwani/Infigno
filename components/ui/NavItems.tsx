// navitems.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
interface NavItemsProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string; 
}

const NavItems: React.FC<NavItemsProps> = ({ children, onClick, href }) => {
  const router = useRouter();
  const handleClick = () => {
    if (href) {
      router.push(href);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div className="cursor-pointer hover:opacity-70 transition" onClick={handleClick}>
      {children}
    </div>
  );
};

export default NavItems;
