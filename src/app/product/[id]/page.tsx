'use client'
import React, { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import listproduct from '@/_mockup/product.json'
import { TProduct } from '@/libs/types'
import Image from 'next/image'
import SVG from 'react-inlinesvg'
import { USDcurrency } from '@/utils/helpers'
import { twMerge } from 'tailwind-merge'

enum EActionCounter {
    INCREMENTED = 'incremented',
    DECREMENTED = 'decremented',
}
type TStateCounter = {
    quantity: number
}

type TActionCounter = {
    type: EActionCounter
}

const findProductById = (id: number) => {
    return listproduct.find(data => data.id === id)
}

const orderCounterReducer = (state: TStateCounter, action: TActionCounter): TStateCounter => {
    switch (action.type) {
        case EActionCounter.INCREMENTED:
            return {
                quantity: state.quantity + 1,
            }
        case EActionCounter.DECREMENTED:
            return {
                quantity: state.quantity > 0 ? state.quantity - 1 : 0,
            }
        default:
            throw new Error('Unknown action.')
    }
}

const Product = () => {
    /**
     * const definition
     */
    const { id } = useParams()
    const { back } = useRouter()
    /**
     * state management
     */
    const [product, setProduct] = React.useState<TProduct | undefined>(undefined)
    const [state, dispatch] = React.useReducer(orderCounterReducer, { quantity: 0 })

    /**
     * Effect & watcher
     */

    useEffect(() => {
        if (id) {
            setProduct(findProductById(Number(id)))
            findProductById(Number(id))
        }
    }, [id])

    /**
     * method definitian
     */

    const handleClickBack = () => {
        back()
    }

    return (
        <main className="mb-14 flex flex-col gap-9">
            <div className="relative w-full overflow-hidden rounded-2xl">
                <Image
                    src={product?.cover.url as string}
                    width={375}
                    height={213}
                    alt={product?.cover.name as string}
                    className="h-auto w-full"
                />
                <SVG
                    src="/assets/chevron_left.svg"
                    className="absolute left-1 top-8 cursor-pointer"
                    onClick={handleClickBack}
                />
                <div className=" absolute bottom-0 left-0 h-1/2 w-full bg-most-order"></div>
            </div>
            <div className="flex flex-col gap-[14px] px-4">
                <div className="w-fit rounded-md bg-lightblue-200 p-2">
                    <span className="text-lightblue-400">{product?.category}</span>
                </div>
                <div>
                    <h1 className="heading-1 text-lightblue-500">{product?.title}</h1>
                    <h5 className="heading-5 text-[28px] text-lightblue-400">
                        {USDcurrency.format(product?.price || 0)}/pc
                    </h5>
                </div>
                <p className="text-neutral">{product?.description}</p>
            </div>

            <div className="flex items-center justify-center gap-[14px] px-4">
                <SVG
                    src="/assets/minus_circle.svg"
                    className={twMerge(
                        state.quantity <= 0
                            ? 'cursor-not-allowed text-lightgray'
                            : 'cursor-pointer text-lightblue-300'
                    )}
                    onClick={() => dispatch({ type: EActionCounter.DECREMENTED })}
                />
                <div
                    className={twMerge(
                        'min-w-[106px] rounded-md border border-lightblue-500 p-1 text-center text-[38px]',
                        state.quantity > 0 ? 'text-lightblue-400' : 'text-lightgray'
                    )}>
                    {state.quantity}
                </div>
                <SVG
                    src="/assets/plus_circle.svg"
                    className="cursor-pointer text-lightblue-300"
                    onClick={() => dispatch({ type: EActionCounter.INCREMENTED })}
                />
            </div>
        </main>
    )
}

export default Product
