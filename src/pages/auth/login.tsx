import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className={'h-screen grid place-items-center'}>
            <div className={'space-y-10'}>
                <div className={'flex flex-col gap-1'}>
                    <label htmlFor={'email-input'}>Email</label>
                    <input id={'email-input'}
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           placeholder={'Email'}/>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <label htmlFor={'password-input'}>Password</label>
                    <input id={'password-input'}
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           placeholder={'Password'}/>
                </div>

                <button onClick={() => {console.log(email, password)}}>Sign In</button>
            </div>
        </div>
    )
}