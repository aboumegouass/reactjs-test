import Alert from "../UIComponents/Alert";
import Loading from "../UIComponents/Loading";
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
    if (loading)
        return <Loading />
    if (error)
        return <Alert text={error} />
    return (
        <div>
            <h2>Items List</h2>
            {!loading && !error && (
                <ul>
                    {items.map((item) => (
                        <Item item={item} key={item.id} />
                    ))}
                </ul>
            )}
        </div>
    );
}
export default ItemsList;