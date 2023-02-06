import React from 'react'
import { ProductContainer } from '../ProductContainer/ProductContainer'
import {PortableText} from "@portabletext/react"
import { RichText } from '../../components'

type Props = {
    body: Block[]
}

export function BlogContainer({body}: Props) {
    return (
        <main className="p-5 flex gap-10 flex-col-reverse xl:flex-row-reverse xl:max-w-screen-xl xl:mx-auto">
            <ProductContainer />
            <div className="flex gap-5 flex-col xl:w-2/3">
                <div className="flex flex-col gap-5 tracking-wide leading-loose">
                    <PortableText
                        value={body}
                        components={RichText}
                    />
                </div>
            </div>
        </main>
    )
}
