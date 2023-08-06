import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

const roboto = Roboto({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'BeLaundry App web',
    description: 'Laundry app untukmu',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={twMerge(roboto.className, 'bg-body')}>{children}</body>
        </html>
    )
}
