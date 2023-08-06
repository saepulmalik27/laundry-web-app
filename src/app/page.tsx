import Hero from '@/components/templates/sections/hero/Hero'
import MostOrder from '@/components/templates/sections/orders/MostOrder'
import PreviousOrder from '@/components/templates/sections/orders/PreviousOrder'
import LatestProduct from '@/components/templates/sections/product/LatestProduct'
import Image from 'next/image'

export default function Home() {
    return (
        <>
            <header className="relative h-fit before:header-before">
                <Hero />
            </header>
            <main className="m-auto flex max-w-lg flex-col gap-10">
                <PreviousOrder />
                <MostOrder />
                <LatestProduct />
            </main>
            <footer className="h-10"></footer>
        </>
    )
}
