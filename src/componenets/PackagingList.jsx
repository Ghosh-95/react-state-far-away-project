export default function PackagingList({ items, onCloseItem, onCheck }) {

    return items.length === 0 ? (<p className="list" style={{ fontStyle: 'italic' }}>Your list is empty! Please add item.</p>) : (
        <div className='list'>
            <ul>
                {items.map(item => (
                    <Item key={item.id} item={item} onCloseItem={onCloseItem} onCheck={onCheck} />
                ))}
            </ul>
        </div>
    );
};

function Item({ item: { itemName, itemQty, packed, id }, onCloseItem, onCheck }) {

    return (
        <li>
            <label htmlFor="check-item"></label>
            <input type="checkbox" id="check-item" value={packed} onChange={() => onCheck(id)} />
            <span style={packed ? { textDecoration: "line-through" } : {}}>
                {itemQty} {itemName}
            </span>

            <button onClick={() => onCloseItem(id)}>❌</button>
        </li>
    );
};