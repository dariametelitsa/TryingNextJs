// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
//
// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { wrapper } from "@/services/store";
import { Provider } from "react-redux";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function MyApp({Component, pageProps, ...rest}: AppPropsWithLayout) {
    // Use the layout defined at the page level, if available
    const {store, props} = wrapper.useWrappedStore(rest);
    const getLayout = Component.getLayout ?? ((page) => page)

    return getLayout(
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>)


}