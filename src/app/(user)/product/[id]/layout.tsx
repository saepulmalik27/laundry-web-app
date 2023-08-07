import React from 'react'

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className="m-auto max-w-lg bg-body">{children}</body>
        </html>
    )
}

export default ProductLayout
