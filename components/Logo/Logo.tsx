import React from 'react'
import LogoUrl from "../../assets/logo.svg"
import Image from 'next/image'
export function Logo() {
    return (
        <Image
            src={LogoUrl}
            className="h-14 w-fit -ml-1 pt-2"
            alt="Picture of the author"
            width={300}
            height={300}
        />
  )
}
