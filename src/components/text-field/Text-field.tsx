// @flow
import * as React from 'react';
import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode, useId } from 'react';
import { cn } from "@/utils/cn";

type Props = ComponentPropsWithoutRef<'input'> & {
    errorMessage?: string
    label?: ReactNode
};
export const TextField = forwardRef<ElementRef<'input'>,Props>(({errorMessage, label, className, id, ...rest}: Props, ref) => {
    const generatedId = useId();
    const idToUse = id ?? generatedId;
    return (
        <>
            <label htmlFor={idToUse}
                   className={'text-sm text-light-900'}>{label}</label>
            <input
                {...rest}
                className={cn('rounded-md p-4 border')}
                id={idToUse}/>
            {errorMessage && <p className={'text-red-500 text-sm'}>{errorMessage}</p>}
        </>
    );
})