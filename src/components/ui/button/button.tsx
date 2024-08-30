import React, { ComponentProps } from "react";

// type Button = {
//     onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
//     disabled?: boolean
//     children: ReactNode
//  }

type Button = ComponentProps<'button'> & {
    variant?: 'primary' | 'secondary' | 'outlined' | 'text'
}

function Button({variant = 'primary', className, ...props}: Button) {
    return (
        <button className={`rounded inline-flex px-3 py-2 ${variant === 'primary' ? 'bg-blue-500 text-slate-50' : ''}
        ${variant === 'secondary' ? 'bg-cyan-800 text-slate-50' : ''}`} {...props}>{props.children}</button>
    );
}
export { Button }