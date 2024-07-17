export default function PackagingList({ items, onCloseItem }) {
    return (
        <div className='list'>
            <ul>
                {items.map(item => (
                    <Item key={item.id} item={item} onCloseItem={onCloseItem} />
                ))}
            </ul>
        </div>
    );
};

function Item({ item: { itemName, itemQty, packed, id }, onCloseItem }) {

    return (
        <li>
            <span style={packed ? { textDecoration: "line-through" } : {}}>
                {itemQty} {itemName}
            </span>

            <button onClick={() => onCloseItem(id)}>❌</button>
        </li>
    );
};