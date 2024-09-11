import { ComponentPropsWithoutRef } from "react";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Control, FieldPath, FieldValues, useController } from "react-hook-form";

type Props<T extends FieldValues> = ComponentPropsWithoutRef<typeof Checkbox> & {
    control: Control<T>
    name: FieldPath<T>
}

export const FormCheckbox = <T extends FieldValues>({control, name, ...props}: Props<T>) => {

    const {
        field: {onChange, value, ...field}
    } = useController({
        control,
        name
    })

    return (
        <Checkbox
        {...props}
        onCheckedChange={onChange}
        checked={value}
        {...field}
    />
    )
}