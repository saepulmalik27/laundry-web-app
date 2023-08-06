'use client'
import React from 'react'
import SVG from 'react-inlinesvg'
const Hero = () => {
    return (
        <div className="m-auto flex max-w-lg flex-col gap-4 px-9  pb-7 pt-20">
            <h1 className="text-[22px] text-white">Welcome Jhon</h1>
            <div className="relative flex min-h-[167px] w-full min-w-fit  items-end justify-end overflow-hidden rounded-[10px] bg-white p-4 shadow-md">
                <div className="absolute left-0 top-0 inline-flex items-center gap-2">
                    <SVG
                        src="/assets/bg-card-pattern.svg"
                        className="aspect-square h-[92px] w-[92px]"
                    />
                    <div className="aspect-square h-[29px] w-[29px] rounded-full bg-lightred-500"></div>
                </div>

                <div className="flex flex-col gap-1">
                    <p className="text-lg">Your Balance</p>
                    <h4 className="heading-4 text-lightblue-400">$ 200.00</h4>
                </div>
            </div>
        </div>
    )
}

export default Hero
