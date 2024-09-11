import { z } from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { TextField } from "@/components/text-field/Text-field";

// const emailRegex = new RegExp(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim);

type LoginFields = {
    email: string
    password: string
}

const loginSchema = z.object({
    email: z.string().email('Неверный адрес'),
    password: z.string().min(3),
})

export default function Login() {
    const {handleSubmit, register, formState: {errors}} = useForm<LoginFields>({resolver: zodResolver(loginSchema)});

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    })


    return (
        <div className={'h-screen grid place-items-center'}>
            <form onSubmit={onSubmit} className={'space-y-10'}>
                    <TextField label={'Email'}
                               placeholder={'Email'}
                               errorMessage={errors.email?.message}
                               {...register('email')}/>
                    <TextField label={'Password'}
                               placeholder={'Password'}
                               errorMessage={errors.password?.message}
                               {...register('password')}/>

                <button>Sign In</button>
            </form>
        </div>
    )
}