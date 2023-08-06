import Image from 'next/image'
import React from 'react'

const MostOrder = () => {
    return (
        <section className="flex flex-col gap-3 px-9">
            <h6 className=" heading-section text-lightblue-400">YOUR MOST ORDERED </h6>
            <div className="relative w-fit overflow-hidden rounded-[10px]">
                <Image
                    src={'/assets/dry_cleaning.png'}
                    width={302}
                    height={214}
                    alt="dry_cleaning"
                />
                <div className="absolute bottom-0 left-0 flex h-[100px] w-full flex-col items-start justify-end gap-1 bg-most-order p-[9px]">
                    <h6 className="heading-6 text-white ">Dry Cleaning</h6>
                    <p className="text-[17px] font-medium text-white">12x | total of $ 4.000</p>
                </div>
            </div>
        </section>
    )
}

export default MostOrder
