
export function CategoryBannerContent() {
  return (
    <div className='md:max-w-screen-xl mt-36 p-5 font-ubuntu flex flex-col text-white md:mx-auto md:flex-row md:justify-between md:items-stretch md:mt-48'  >
      <div className='flex flex-col gap-5'>
        <h1 className='text-3xl font-bold'>Programming</h1>
        <p className='h-32 max-w-3xl overflow-hidden'>In the internet age, content creators, reviewers, and influencers have entered customers’ circle of trust — and businesses have taken note. Beginners of a new hobby might watch YouTube videos for tutorials and inspiration. Customers considering a new product might scan review sites and read blogs for recommendations</p>
      </div>
      <div className='flex md:items-end gap-5'>
        <button className='hover:bg-black/25 cursor-pointer py-3 px-5'>Newest</button>
        <button className='hover:bg-black/25 cursor-pointer py-3 px-5'>Category</button>
      </div>
    </div>
  )
}
