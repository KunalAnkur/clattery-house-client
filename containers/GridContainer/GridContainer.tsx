import { ArticleContainer } from "../ArticleContainer/ArticleContainer";

export function GridContainer() {
    return <section className="p-5 md:max-w-screen-xl md:mx-auto">
        <h1 className="text-xl font-bold">Recent blog posts</h1>
        <div className="mt-5 grid xl:grid-cols-10 gap-8">
            <ArticleContainer className="flex flex-col xl:row-span-2 xl:col-span-4" imageWith="w-full" headingText="text-2xl" buttonGroup="flex-col-reverse gap-5 xl:flex-row" />
            <ArticleContainer className="flex xl:flex-row flex-col xl:col-span-6 xl:gap-8" imageWith="xl:w-[350px] xl:h-full" buttonGroup="flex-col-reverse gap-5 xl:items-start" headingText="text-xl xl:mt-0" />
            <ArticleContainer className="flex xl:flex-row flex-col xl:col-span-6 xl:gap-8" imageWith="xl:w-[350px] xl:h-full" buttonGroup="flex-col-reverse gap-5 xl:items-start" headingText="text-xl xl:mt-0" />
        </div>
    </section>
}