import * as React from 'react';
import Link from "next/link";
import style from './Navbar.module.scss'

export const Navbar = () => {
    return (
        <div className={style.links}>
            <Link href={'/'}>Main</Link>
            <Link href={'/characters'}>Characters</Link>
        </div>
    );
};