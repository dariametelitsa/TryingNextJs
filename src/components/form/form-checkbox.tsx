import { ComponentPropsWithoutRef } from "react";
import { Control, FieldPath, FieldValues, useController } from "react-hook-form";
import { Checkbox } from "@/components/checkbox/checkbox";

type Props<T extends FieldValues> = ComponentPropsWithoutRef<typeof Checkbox> & {
    control: Control<T>
    name: FieldPath<T>
}

export const FormCheckbox = <T extends FieldValues>({control, name, errorMessage, ...props}: Props<T>) => {

    const {
        field: {onChange, value, ...field},
        fieldState: {error}
    } = useController({
        control,
        name
    })

    return (
        <Checkbox
        {...props}
        onCheckedChange={onChange}
        checked={value}
        errorMessage={errorMessage ?? error?.message}
        {...field}
    />
    )
}