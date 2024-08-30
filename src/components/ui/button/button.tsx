import React, { ComponentProps } from "react";
import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";

// type Button = {
//     onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
//     disabled?: boolean
//     children: ReactNode
//  }

const buttonVariants = cva(["rounded inline-flex px-3 py-2 text-slate-50"], { //дефолтные стили
    variants: {
        variant: {
            primary: [
                "bg-accent-500",
                "hover:bg-accent-100",
                "active:bg-accent-700"
            ],
            secondary: [
                "bg-gray-500",
                "hover:bg-gray-600",
                "active: bg-[#212121]"
            ],
        },
    },
    defaultVariants: {
        variant: "primary",
    },
});

// type Button = ComponentProps<'button'> & {
//     variant?: 'primary' | 'secondary' | 'outlined' | 'text'
// }

type Button = ComponentProps<'button'> & VariantProps<typeof buttonVariants>

function Button({variant = 'primary', className, ...props}: Button) {
    return (
        ////first
        // <button className={`rounded inline-flex px-3 py-2 ${variant === 'primary' ? 'bg-blue-500 text-slate-50' : ''}
        // ${variant === 'secondary' ? 'bg-cyan-800 text-slate-50' : ''}`} {...props}>{props.children}</button>

        // //second
        // <button className={cn(`rounded inline-flex px-3 py-2 text-slate-50`,
        //     variant === 'primary' && cn('bg-blue-500', 'hover:bg-blue-400'),
        //     variant === "secondary" && 'bg-cyan-800',
        //     className)
        // } {...props}>{props.children}</button>

        //third
        <button className={cn(buttonVariants({variant}), className)}>{props.children}</button>


    );
}

export { Button }