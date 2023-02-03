import Head from "next/head"
import { Banner, CategoryBannerContent } from "../../components"
import { useRouter } from "next/router"
import { CategoryPageContainer } from "../../containers"
function CategoryPage() {
    const { category } = useRouter().query
    return (
        <>
            <Head>
                <title>{category}</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>

            <Banner bannerHeight="h-[400px]" adjustingHeight="h-[348px]">
                <CategoryBannerContent />
            </Banner>
            <CategoryPageContainer />
        </>
    )
}

export default CategoryPage