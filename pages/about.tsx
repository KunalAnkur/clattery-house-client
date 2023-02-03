import Head from "next/head"
import { Banner } from "../components"
import { AboutMeContainer } from "../containers"

function about() {
    return (
        <>
            <Head>
                <title>About</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>

            <Banner bannerHeight="h-[300px]" adjustingHeight="h-[248px]">
                <div className="text-4xl font-bold h-full text-white flex justify-center items-center p-5">
                    <h1 className="">About</h1>
                </div>
            </Banner>
            <AboutMeContainer />
        </>
    )
}

export default about