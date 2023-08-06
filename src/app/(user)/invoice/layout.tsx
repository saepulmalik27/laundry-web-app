import React from 'react'

const InvoiceLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className="m-auto max-w-lg bg-body py-8">{children}</body>
        </html>
    )
}

export default InvoiceLayout
