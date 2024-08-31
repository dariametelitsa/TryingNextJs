import { Inter } from "next/font/google";
import Link from "next/link";
import { HeadMeta } from "@/components/HeadMeta/HeadMeta";
import { Navbar } from "@/components/Navbar/Navbar";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <>
            <HeadMeta title={'Main page'} description={'Main page'}/>
            <main>
                <Navbar/>
                <div>Hello</div>
                <p><Link href={'/auth'}>To auth</Link></p>
                <p><Link href={'/characters'}>To characters</Link></p>
            </main>
        </>
    );
}
