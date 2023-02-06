import React from 'react'
import { AvatarNamePlate } from '../../components'
import {dataToString} from "../../helper/index"
type Props = {
    post: Post
}
export function BlogPostHeaderContainer({post}: Props) {
    const {title, titleDescription, author, _createdAt, readingTime} = post
    return (
        <header className='text-white w-full font-ubuntu gap-16 xl:max-w-screen-xl xl:mx-auto flex flex-col h-full justify-end p-5 pb-10 xl:flex-row xl:justify-between xl:items-end'>
            <div className='flex flex-col gap-10 xl:w-3/4'>
                <h1 className='text-4xl font-bold'>{title}</h1>
                <p className='italic'>{titleDescription}</p>
            </div>
            <div className='flex justify-between flex-col gap-5 items-start md:flex-row md:items-end xl:flex-col xl:items-end xl:justify-start xl:gap-20 xl:w-1/4'>
                <AvatarNamePlate author={author} />
                <p className='font-bold text-sm text-[#C9B5DD]'>{dataToString(_createdAt)} • {readingTime} min read</p>
            </div>
        </header>
    )
}
