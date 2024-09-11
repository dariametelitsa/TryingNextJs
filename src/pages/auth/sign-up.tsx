import {z} from 'zod';
import { TextField } from "@/components/text-field/Text-field";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";

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
    const {register, handleSubmit, formState: {errors}} = useForm<SignUpType>({resolver: zodResolver(signUpSchema)});

    const onSubmit = handleSubmit((data) => {
        console.log(data)
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

                <label className={'block'}>
                <input
                    className={'mr-3'}
                    type={'checkbox'}
                    {...register('agreesToTOS')}
                />
                    I agree to the Terms of Service and Conditions
                </label>
                {errors.agreesToTOS && <p className={'text-red-500 text-sm'}>{errors.agreesToTOS.message}</p>}

                <button>Sign In</button>
            </form>
        </div>
    );
};