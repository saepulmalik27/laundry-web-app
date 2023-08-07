'use client'
import { USDcurrency } from '@/utils/helpers'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
import SVG from 'react-inlinesvg'
type TListOrder = {
    title: string
    quantity: number
    price: number
    image: string
}

const listOrder: TListOrder[] = [
    {
        title: 'Bag of Laundry',
        quantity: 2,
        price: 180,
        image: '/assets/laundry_bag.png',
    },
    {
        title: 'Dry Cleaning',
        quantity: 3,
        price: 10,
        image: '/assets/laundry_bag.png',
    },
    {
        title: 'Rug',
        quantity: 1,
        price: 14,
        image: '/assets/laundry_bag.png',
    },
]

const Invoice = () => {
    const { back } = useRouter()
    const handleClick = () => {
        console.log('hallo')

        back()
    }

    return (
        <>
            <header>
                <SVG
                    src="/assets/chevron_left.svg"
                    className="cursor-pointer"
                    title="chevron"
                    onClick={handleClick}
                />
            </header>
            <main className="my-8 flex flex-col gap-8 px-9">
                <div className="overflow-hidden rounded-[10px]">
                    <div className="bg-lightblue-400 py-4 text-center text-[26px]">
                        <h5 className="heading-6 text-white">ORDER SUMMARY</h5>
                    </div>
                    <div className="bg-white p-[15px]">
                        <div className="flex justify-end">
                            <p className="text-xs text-lightblue-300">ORDER #21340</p>
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <p className="font-bold">John Doe</p>
                            <p className="text-[13px]">
                                123 Pasir Ris,
                                <br /> 13810, Singapore
                            </p>
                        </div>
                    </div>
                    <div className="bg-white">
                        {listOrder.map((order, index) => (
                            <div className="flex items-center gap-1 px-[15px] py-4" key={index}>
                                <Image
                                    src={order.image}
                                    width={50}
                                    height={50}
                                    className="aspect-square"
                                    alt={order.title}
                                />
                                <div className="flex-grow">
                                    <p className="text-[15px] font-medium">{order.title}</p>
                                    <p className="text-xs text-lightblue-300">
                                        Qty : {order.quantity}
                                    </p>
                                </div>
                                <div className="flex w-16 flex-col items-center justify-center gap-1">
                                    <p className="text-[9px] text-stroke">Total</p>
                                    <p className="text-sm font-bold text-lightblue-300">
                                        {USDcurrency.format(order.price)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between bg-lightblue-400 px-3 py-4 font-bold text-white">
                        <p>TOTAL ORDER</p>
                        <p>$ 204.00</p>
                    </div>
                </div>
                <div className="flex cursor-pointer items-center justify-center gap-3 rounded-2xl bg-lightgreen-500 py-4 text-white">
                    <object data="/assets/chat_alt.svg" title="chat"></object>
                    <p className="select-none font-bold">WHATSAPP US</p>
                </div>
            </main>
        </>
    )
}

export default Invoice
