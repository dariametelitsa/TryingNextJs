// @flow
import * as React from 'react';
import { Navbar } from "@/components/Navbar/Navbar";
import { NextPage } from "next";
import { PropsWithChildren, ReactElement } from "react";


export const Layout: NextPage<PropsWithChildren> = (props) => {
    const {children} = props;
    return (
        <main>
            <Navbar/>
            {children}
        </main>
    );
};

export const getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>
}


// export default function Layout({children}: { children: React.ReactNode }) {
//     return (
//         <main>
//             <Navbar/>
//             {children}
//         </main>
//     )
// }