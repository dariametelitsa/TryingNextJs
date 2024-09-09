import { KeyboardEvent, useState, ChangeEvent } from "react";

const emailRegex = new RegExp(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim);

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submitCount, setSubmitCount] = useState(0);

    const [emailError, setEmailError] = useState<string | null>(null)

    const handleSubmit = () => {
        setSubmitCount((prev) => prev + 1)
        if(!emailRegex.test(email)) {
            setEmailError('Invalid Email');
            return;
        }
        setEmailError(null)
        console.log(email, password);
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key !== 'Enter') {
            return
        }
        handleSubmit();
    }

    const handleEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if(e.currentTarget.id === 'email-input' &&
            submitCount !== 0 &&
            !emailRegex.test(email)) {
            setEmailError('Invalid Email');
        }
        else {
            setEmailError(null);
        }

    }

    return (
        <div className={'h-screen grid place-items-center'}>
            <div className={'space-y-10'}>
                <div className={'flex flex-col gap-1'}>
                    <label htmlFor={'email-input'}>Email</label>
                    <input id={'email-input'}
                           value={email}
                           onChange={handleEmailInputChange}
                           placeholder={'Email'}
                           onKeyDown={handleKeyDown}/>
                    {emailError && <p className={'text-red-500 text-sm'}>{emailError}</p>}
                </div>
                <div className={'flex flex-col gap-2'}>
                    <label htmlFor={'password-input'}>Password</label>
                    <input id={'password-input'}
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           placeholder={'Password'}
                           onKeyDown={handleKeyDown}/>
                </div>

                <button onClick={handleSubmit}>Sign In
                </button>
            </div>
        </div>
    )
}