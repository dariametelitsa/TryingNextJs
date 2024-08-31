import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <main>
            <div>Hello</div>
            <p><Link href={'/auth'}>To auth</Link></p>
            <p><Link href={'/characters'}>To characters</Link></p>
        </main>
    );
}
