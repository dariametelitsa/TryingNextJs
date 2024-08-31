import { Inter } from "next/font/google";
import Link from "next/link";
import { HeadMeta } from "@/components/HeadMeta/HeadMeta";
import { getLayout } from "@/Layout/Layout";



const inter = Inter({subsets: ["latin"]});

function Home() {
    return (
        <>
            <HeadMeta title={'Main page'} description={'Main page'}/>
                <div>Hello</div>
                <p><Link href={'/auth'}>To auth</Link></p>
                <p><Link href={'/characters'}>To characters</Link></p>
        </>
    );
}

Home.getLayout = getLayout
export default Home

