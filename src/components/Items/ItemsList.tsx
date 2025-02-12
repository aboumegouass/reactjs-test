import Item from "./Item";
type CompProps = {
    loading: boolean
    error: string | null
    items: ItemType[]
}
function ItemsList({
    loading,
    error,
    items
}: CompProps) {
    return (
        <div>
            <h2>Items List</h2>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {!loading && !error && (
                <ul>
                    {items.map((item, i) => (
                        <Item item={item} key={i} />
                    ))}
                </ul>
            )}
        </div>
    );
}
export default ItemsList;