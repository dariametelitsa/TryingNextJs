// @flow
import * as React from 'react';
import { PropsWithChildren } from 'react';
import { NextPage } from "next";
import { Navbar } from "@/components/Navbar/Navbar";


export const Layout: NextPage<PropsWithChildren> = (props) => {
    const {children} = props;
    return (
        <main>
            <Navbar/>
            {children}
        </main>
    );
};