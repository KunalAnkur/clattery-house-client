import React from 'react'
import { ClatteryImage } from '../ClatteryImage/ClatteryImage'

type Props = {
    author: Author
}

export function AvatarNamePlate({author}: Props) {
    return (
        <div className='flex gap-5 items-center'>
            <ClatteryImage className='w-12 h-12 object-cover rounded-full' src={author.image} alt="" />
            <div>
                <p className='font-bold text-lg'>{author.name}</p>
                <p className='text-sm'>Content creators, reviewers</p>
            </div>
        </div>
    )
}
