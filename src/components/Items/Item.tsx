type CompProps = {
    item: ItemType
}
function Item({ item }: CompProps) {
    return (
        <li>{item.title}</li>
    )
}

export default Item