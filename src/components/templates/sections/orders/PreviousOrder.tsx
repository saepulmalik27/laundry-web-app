'use client'
import Image from 'next/image'
import React from 'react'
import SVG from 'react-inlinesvg'

import { useRouter } from 'next/navigation'
const PreviousOrder = () => {
    const router = useRouter()

    const handleOnClick = () => {
        router.push('/invoice')
    }

    return (
        <section className="flex flex-col gap-3 px-9">
            <h6 className="heading-section text-lightblue-400">PREVIOUS ORDER</h6>
            <div className="flex flex-row overflow-hidden rounded-md bg-white">
                <div className="flex flex-1 flex-row gap-[6px] px-2 py-3">
                    <Image
                        width={67}
                        height={67}
                        src={'/assets/laundry_bag.png'}
                        alt="bag of laundry"
                        className="aspect-square"
                    />
                    <div className="flex flex-col justify-between gap-2">
                        <p className="font-medium tracking-wide">Bag of Laundry</p>
                        <div>
                            <p className="text-[10px] text-stroke">Total Order</p>
                            <h6 className="text-[15px] font-bold text-lightblue-400"> $ 180.00</h6>
                        </div>
                    </div>
                </div>
                <div
                    className="flex cursor-pointer flex-col items-center justify-center gap-[10px] bg-card-pattern px-5 py-[10px]"
                    onClick={handleOnClick}>
                    <SVG src="/assets/note.svg" />
                    <p className="text-[10px] text-white">INVOICE</p>
                </div>
            </div>
        </section>
    )
}

export default PreviousOrder
