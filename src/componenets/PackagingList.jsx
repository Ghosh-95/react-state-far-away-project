import { useState } from "react";

export default function PackagingList({ items, onCloseItem, onCheck, onClear }) {
    const [sortBy, setSortBy] = useState('input');

    let sortedItems;
    if (sortBy === 'input') sortedItems = items;
    if (sortBy === 'description') sortedItems = items.slice().sort((a, b) => a["itemName"].localeCompare(b["itemName"]));
    if (sortBy === 'packed') sortedItems = items.slice().sort((a, b) => Number(a["packed"]) - Number(b["packed"]));


    return sortedItems.length === 0 ? (<p className="list" style={{ fontStyle: 'italic' }}>Your list is empty! Please add item.</p>) : (
        <div className='list'>
            <ul>
                {sortedItems.map(item => (
                    <Item key={item.id} item={item} onCloseItem={onCloseItem} onCheck={onCheck} />
                ))}
            </ul>

            <div className="actions">
                <label htmlFor="sort-items"></label>
                <select id="sort-items" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Sort by Input</option>
                    <option value="packed">Sort by Packed items</option>
                    <option value="description">Sort by Name</option>
                </select>

                <button onClick={onClear}>Clear List</button>
            </div>
        </div>
    );
};

function Item({ item: { itemName, itemQty, packed, id }, onCloseItem, onCheck }) {

    return (
        <li>
            <label htmlFor={"check-item" + id}></label>
            <input type="checkbox" id={"check-item" + id} value={packed} onChange={() => onCheck(id)} />
            <span style={packed ? { textDecoration: "line-through" } : {}}>
                {itemQty} {itemName}
            </span>

            <button onClick={() => onCloseItem(id)}>❌</button>
        </li>
    );
};