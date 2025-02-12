import React from "react"

type CompProps = {
    type?: 'error' | 'default' | 'success'
    text: string
}
function Alert({ type = 'error', text }: CompProps) {
    return (
        <AlertTheme type={type}>{text}</AlertTheme>
    )
}

export default Alert

export const AlertTheme = ({ type, children }: { type: 'error' | 'default' | 'success', children: React.ReactNode }) => {
    switch (type) {
        case 'default':
            return <div style={{ color: 'gray' }}>{children}</div>

        case 'error':
            return <div style={{ color: 'red' }}>{children}</div>

        case 'success':
            return <div style={{ color: 'green' }}>{children}</div>

        default:
            return <div style={{ color: 'gray' }}>{children}</div>
    }
}