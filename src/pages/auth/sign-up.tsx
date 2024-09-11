import { z } from 'zod';
import { TextField } from "@/components/text-field/Text-field";
import { useController, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { Checkbox } from "@/components/checkbox/checkbox";
import { FormCheckbox } from "@/components/form/form-checkbox";

const signUpSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
    passwordConfirmation: z.string(),
    agreesToTOS: z.literal(true, {
        errorMap: () => ({message: 'You have to accept out terms of service'}),
        // invalid_type_error: 'You have to accept out terms of service',
        // message: 'You have to accept out terms of service'
    })
}).refine((value) => value.password === value.passwordConfirmation, {
    message: 'Pass do not match',
    path: ['passwordConfirmation']
})

type SignUpType = z.infer<typeof signUpSchema>;

export default function SignUp() {
    const {
        register,
        handleSubmit,
        formState: {errors},
        control
    } = useForm<SignUpType>({resolver: zodResolver(signUpSchema)});

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

    const {field: {onChange, value, ...field}} = useController({
        control,
        name: 'agreesToTOS'
    })

    return (
        <div className={'h-screen grid place-items-center'}>
            <form onSubmit={onSubmit} className={'space-y-10'}>
                <TextField label={'Username'}
                           placeholder={'Username'}
                           errorMessage={errors.username?.message}
                           {...register('username')}
                />
                <TextField label={'Email'}
                           placeholder={'Email'}
                           errorMessage={errors.email?.message}
                           {...register('email')}
                />
                <TextField label={'Password'}
                           placeholder={'Password'}
                           errorMessage={errors.password?.message}
                           type={'password'}
                           {...register('password')}
                />
                <TextField label={'Confirm password'}
                           placeholder={'Password Confirmation'}
                           errorMessage={errors.passwordConfirmation?.message}
                           type={'password'}
                           {...register('passwordConfirmation')}
                />
                {/*<Checkbox*/}
                {/*    {...field}*/}
                {/*    onCheckedChange={onChange}*/}
                {/*    checked={value}*/}
                {/*    className={'mr-3'}*/}
                {/*    errorMessage={errors.agreesToTOS?.message}*/}
                {/*    label={'I agree with'}*/}
                {/*/>*/}
                    <FormCheckbox
                        className={'mr-3'}
                        control={control}
                        name={'agreesToTOS'}
                        label={'I agree with'}
                    />

                <button>Sign In</button>
            </form>
        </div>
    );
};