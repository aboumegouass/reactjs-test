type CompProps = {
    active?: boolean
}
function Loading({ active = false }: CompProps) {
    if (active)
        return (
            <div>Loading...</div>
        )
}

export default Loading