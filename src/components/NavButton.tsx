import React from "react";
import type { State } from "../pages/Verification"; // adjust path if needed

interface NavButtonProps {
    goTo: State;
    setPage: (page: State) => void;
    children: React.ReactNode;
    className?: string;
}

export default function NavButton({
    goTo,
    setPage,
    children,
    className = "",
}: NavButtonProps) {
    return (
        <button
            onClick={() => setPage(goTo)}
            className={`w-full bg-[#DEE9E8] text-gray-700 py-2 rounded-lg text-sm font-semibold 
                 hover:bg-gray-200 transition-colors hover:scale-105 ${className}`}
        >
            {children}
        </button>
    );
}
