import Image from 'next/image'
import React from 'react'
import { urlFor } from '../../sanity'
interface Props {
    className: string
    src: MainImage
    alt: string
}
export function ClatteryImage({className, src, alt}: Props) {
  return (
    <Image className={className} src={urlFor(src).url()} alt={alt} width={1080} height={720} /> 
  )
}
