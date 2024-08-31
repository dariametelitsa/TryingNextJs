// @flow
import * as React from 'react';
import Link from "next/link";
import { router } from "next/client";
import { buttonVariants } from "@/components/ui/button/button";
import { cn } from "@/utils/cn";

type Props = {

};

export default function auth (props: Props) {
    return (
        <div>
            <div className={'flex flex-row'}>Login</div>
            {/*<button onClick={() => router.push('/api/hello')}>Login</button>*/}
            <button onClick={() => router.push('/api/hello')}>Login</button>
            <Link href={'/'}>Login</Link>
            <Link className={buttonVariants({variant: 'primary'})} href={'/'}>Login</Link>
        </div>
    );
};

