import React from 'react'

export function AvatarNamePlate() {
    return (
        <div className='flex gap-5 items-center'>
            <img className='w-12 h-12 object-cover rounded-full' src="https://techcrunch.com/wp-content/uploads/2022/12/lensa-ai-magic-avatar.jpg?w=1024" alt="" />
            <div>
                <p className='font-bold text-lg'>Leah Retta</p>
                <p className='text-sm'>Content creators, reviewers</p>
            </div>
        </div>
    )
}
