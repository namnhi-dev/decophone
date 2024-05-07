import { cn } from "@/lib/utils";
import React from "react";

interface WidthWrapperProps {
    className?: string;
    children: React.ReactNode;
}

const WidthWrapper = ({ children, className }: WidthWrapperProps) => {
    return (
        <div
            className={cn(
                "h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
                className
            )}
        >
            {children}
        </div>
    );
};

export default WidthWrapper;
