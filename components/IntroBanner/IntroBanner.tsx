export function IntroBanner() {
    return <div className="w-full font-ubuntu text-white xl:max-w-screen-xl xl:mx-auto xl:p-5 xl:mt-20">
        <div className="w-full flex xl:relative">
            <div className="flex items-center xl:h-[26rem]">
                <img className="w-0 xl:w-[22rem] shadow rounded-lg z-10 xl:visible xl:h-fit object-cover" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&dl=kalen-emsley-Bkci_8qcdvQ-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb" alt="" />
            </div>
            <div className="p-5 mt-20 z-0 flex flex-col gap-4 xl:mt-0 xl:bg-black/10 xl:backdrop-blur-sm xl:rounded-3xl xl:p-16 xl:absolute xl:justify-end xl:right-0 xl:w-4/5 xl:pl-36">
                <h2 className="text-3xl font-bold">What is affiliate marketing (and how to use it to your advantage)</h2>
                <span className="text-purple-200 font-bold">Ankur Kunal • 2 Jan 2022</span>
                <p>In the internet age, content creators, reviewers, and influencers have entered customers’ circle of trust — and businesses have taken note. Beginners of a new hobby might watch YouTube videos for tutorials and inspiration. Customers considering a new product might scan review sites and read blogs for recommendations</p>
                <button className="bg-gray-100/25 w-fit py-2 px-5 mt-5 cursor-pointer">see more</button>
            </div>
        </div>
    </div>
}