import { useState, FormEvent } from "react";

const emailRegex = new RegExp(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim);

export default function Login() {

    const [emailError, setEmailError] = useState<string | null>(null)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formObj = Object.fromEntries(new FormData(e.currentTarget));
        console.log(formObj);
    }

    return (
        <div className={'h-screen grid place-items-center'}>
            <form onSubmit={handleSubmit} className={'space-y-10'}>
                <div className={'flex flex-col gap-1'}>
                    <label htmlFor={'email-input'}>Email</label>
                    <input id={'email-input'}
                           name={'email'}
                           type={'email'}
                           placeholder={'Email'}/>
                    {emailError && <p className={'text-red-500 text-sm'}>{emailError}</p>}
                </div>
                <div className={'flex flex-col gap-2'}>
                    <label htmlFor={'password-input'}>Password</label>
                    <input id={'password-input'}
                           name={'password'}
                           placeholder={'Password'}/>
                </div>

                <button>Sign In</button>
            </form>
        </div>
    )
}