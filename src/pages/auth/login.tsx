import {z} from 'zod';
import { useForm } from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod'

// const emailRegex = new RegExp(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim);

type LoginFields = {
    email: string
    password: string
}

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3)
})

export default function Login() {
    const {handleSubmit, register, formState: {errors}} = useForm<LoginFields>({resolver: zodResolver(loginSchema)} );

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    //     try{
    //         const parsed = loginSchema.parse(data);
    //         console.log(parsed);
    //     } catch (e) {
    //         console.log('Validation errors', e)
    //     }
    })


    return (
        <div className={'h-screen grid place-items-center'}>
            <form onSubmit={onSubmit} className={'space-y-10'}>
                <div className={'flex flex-col gap-1'}>
                    <label htmlFor={'email-input'}>Email</label>
                    <input id={'email-input'}
                           {...register('email', {
                             // pattern: {value: emailRegex, message: 'Please enter a valid email'},
                             // required: 'Email is required',
                           })}
                           placeholder={'Email'}/>
                    {errors.email && <p className={'text-red-500 text-sm'}>{errors.email.message}</p>}
                </div>
                <div className={'flex flex-col gap-2'}>
                    <label htmlFor={'password-input'}>Password</label>
                    <input id={'password-input'}
                           {...register('password', {
                               // minLength: {value: 3, message: 'Password has to be longer than 3 characters'},
                               // required: 'Password is required',
                           })}
                           placeholder={'Password'}/>
                    {errors.password && <p className={'text-red-500 text-sm'}>{errors.password.message}</p>}
                </div>

                <button>Sign In</button>
            </form>
        </div>
    )
}