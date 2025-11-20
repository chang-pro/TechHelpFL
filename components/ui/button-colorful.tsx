"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ButtonColorfulProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    href?: string;
    external?: boolean;
    children?: React.ReactNode;
}

export function ButtonColorful({
    className,
    label,
    href,
    external = false,
    children,
    ...props
}: ButtonColorfulProps) {
    const content = children || label || "Explore Components";
    
    const buttonContent = (
        <>
            {/* Gradient background effect */}
            <div
                className={cn(
                    "absolute inset-0",
                    "bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600",
                    "opacity-40 group-hover:opacity-80",
                    "blur transition-opacity duration-500"
                )}
            />
            {/* Content */}
            <div className="relative flex items-center justify-center gap-2">
                <span className="text-white dark:text-zinc-900">{content}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/90 dark:text-zinc-900/90" />
            </div>
        </>
    );

    const buttonClasses = cn(
        "relative min-h-[44px] px-4 overflow-hidden",
        "bg-zinc-900 dark:bg-zinc-100",
        "rounded-full",
        "transition-all duration-200",
        "group",
        "inline-flex items-center justify-center",
        className
    );

    if (href) {
        if (external) {
            return (
                <a 
                    href={href} 
                    className={buttonClasses}
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    {buttonContent}
                </a>
            );
        }
        return (
            <Link href={href} className={buttonClasses}>
                {buttonContent}
            </Link>
        );
    }

    return (
        <Button
            className={buttonClasses}
            {...props}
        >
            {buttonContent}
        </Button>
    );
}
