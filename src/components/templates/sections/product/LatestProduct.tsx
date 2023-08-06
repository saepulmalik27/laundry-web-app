import { USDcurrency } from '@/utils/helpers'
import Image from 'next/image'
import React from 'react'

type TLatestProduct = {
    category: string
    title: string
    price: number
    description?: string
    cover: {
        name: string
        url: string
    }
}

const dataProduct: TLatestProduct[] = [
    {
        category: 'Dry Cleaning',
        price: 10,
        title: 'Jeans',
        cover: {
            name: 'jeans',
            url: '/assets/jeans.png',
        },
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit diam, lobortis at auctor eu, tempus eget enim. Etiam ullamcorper risus ac diam pulvinar, a auctor nunc sagittis. In euismod est est, ac pretium sem egestas eget. Nunc mollis rutrum nisl lacinia convallis. Curabitur et arcu eros. Proin eu tellus augue. Vestibulum auctor risus erat, et tempor augue ',
    },
    {
        category: 'Dry Cleaning',
        price: 10,
        title: 'T-Shirt',
        cover: {
            name: 't-shirt',
            url: '/assets/t-shirt.png',
        },
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit diam, lobortis at auctor eu, tempus eget enim. Etiam ullamcorper risus ac diam pulvinar, a auctor nunc sagittis. In euismod est est, ac pretium sem egestas eget. Nunc mollis rutrum nisl lacinia convallis. Curabitur et arcu eros. Proin eu tellus augue. Vestibulum auctor risus erat, et tempor augue ',
    },
]

const LatestProduct = () => {
    const handleClick = (target: string) => {}

    return (
        <section className="flex flex-col gap-3 pl-9">
            <h6 className="heading-section text-lightblue-400">OUR LATEST PRODUCT</h6>
            <div className="flex w-full flex-row gap-[19px] overflow-x-auto overflow-y-hidden">
                {dataProduct.map((product, index) => (
                    <div
                        key={index}
                        className="relative w-fit cursor-pointer overflow-hidden rounded-[10px]">
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
                                {' '}
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
