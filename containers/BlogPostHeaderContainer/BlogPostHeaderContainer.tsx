import React from 'react'
import { AvatarNamePlate } from '../../components'

export function BlogPostHeaderContainer() {
    return (
        <header className='text-white w-full font-ubuntu gap-16 xl:max-w-screen-xl xl:mx-auto flex flex-col h-full justify-end p-5 pb-10 xl:flex-row xl:justify-between xl:items-end'>
            <div className='flex flex-col gap-10 xl:w-3/4'>
                <h1 className='text-4xl font-bold'>Three designers' perspectives on approaching a website redesign</h1>
                <p className='italic'>In the internet age, content creators, reviewers, and influencers have entered customers’ circle of trust — and businesses have taken note. Begin</p>
            </div>
            <div className='flex justify-between flex-col gap-5 items-start md:flex-row md:items-end xl:flex-col xl:items-end xl:justify-start xl:gap-20 xl:w-1/4'>
                <AvatarNamePlate />
                <p className='font-bold text-sm text-[#C9B5DD]'>15 Jan 2020 • 6 min read</p>
            </div>
        </header>
    )
}
