'use client'
import { USDcurrency } from '@/utils/helpers'
import Image from 'next/image'
import React from 'react'
import productList from '@/_mockup/product.json'
import { TProduct } from '@/libs/types'
import { useRouter } from 'next/navigation'

const dataProduct: TProduct[] = productList

const LatestProduct = () => {
    const { push } = useRouter()
    const handleClick = (target: number) => {
        push(`/product/${target}`)
    }

    return (
        <section className="flex flex-col gap-3 pl-9">
            <h6 className="heading-section text-lightblue-400">OUR LATEST PRODUCT</h6>
            <div className="flex w-full flex-row gap-[19px] overflow-x-auto overflow-y-hidden">
                {dataProduct.map((product, index) => (
                    <div
                        key={index}
                        className="relative w-fit cursor-pointer overflow-hidden rounded-[10px]"
                        onClick={() => handleClick(product.id)}>
                        <Image
                            src={product.cover.url}
                            width={176}
                            height={214}
                            alt={product.cover.name}
                            className="max-h-[214px] max-w-[176px]"
                        />
                        <div className="absolute bottom-0 left-0 flex h-[100px] w-full flex-col items-start justify-end bg-most-order p-[9px]">
                            <div className="inline-flex items-center gap-[5px]">
                                <div className="h-[6px] w-[6px] rounded bg-lightred-500"></div>
                                <p className="text-[9px] text-white">{product.category}</p>
                            </div>
                            <h6 className="heading-6 text-white ">{product.title}</h6>
                            <h6 className="heading-6 text-xl text-white">
                                {USDcurrency.format(product.price)}/pc
                            </h6>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default LatestProduct
