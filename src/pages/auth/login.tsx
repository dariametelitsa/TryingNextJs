import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";

const emailRegex = new RegExp(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim);
type LoginFields = {
    email: string
    password: string
}

export default function Login() {
    const {handleSubmit, register, formState: {errors}} = useForm<LoginFields>();
    const onSubmit = handleSubmit((data) => {
        console.log(data);
    })

    // const [emailError, setEmailError] = useState<string | null>(null)
    // const _handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     const formObj = Object.fromEntries(new FormData(e.currentTarget));
    //     console.log(formObj);
    // }

    return (
        <div className={'h-screen grid place-items-center'}>
            <form onSubmit={onSubmit} className={'space-y-10'}>
                <div className={'flex flex-col gap-1'}>
                    <label htmlFor={'email-input'}>Email</label>
                    <input id={'email-input'}
                           {...register('email', {
                             pattern: {value: emailRegex, message: 'Please enter a valid email'},
                             required: 'Email is required',
                           })}
                           // type={'email'}
                           placeholder={'Email'}/>
                    {errors.email && <p className={'text-red-500 text-sm'}>{errors.email.message}</p>}
                </div>
                <div className={'flex flex-col gap-2'}>
                    <label htmlFor={'password-input'}>Password</label>
                    <input id={'password-input'}
                           {...register('password', {
                               minLength: {value: 3, message: 'Password has to be longer than 3 characters'},
                               required: 'Password is required',
                           })}
                           placeholder={'Password'}/>
                    {errors.password && <p className={'text-red-500 text-sm'}>{errors.password.message}</p>}
                </div>

                <button>Sign In</button>
            </form>
        </div>
    )
}