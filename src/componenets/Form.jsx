import { useState } from 'react';

export default function Form({ onAddItem }) {
    const [itemName, setItemName] = useState('');
    const [itemQty, setItemQty] = useState(1);


    function handleSubmit(e) {
        e.preventDefault();

        if (!itemName) return;

        const newItem = { itemQty, itemName, packed: false, id: Date.now() };

        onAddItem(newItem);

        setItemName('');
        setItemQty(1);
    };

    return (
        <form className="add-form" id='input-form' action="" onSubmit={handleSubmit}>
            <h3>What do you want for your trip?</h3>

            <label htmlFor="quantity"></label>
            <select id="quantity" value={itemQty} onChange={(e) => setItemQty(+e.target.value)}>

                {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (<option value={num} key={num + 90}>{num}</option>))}

            </select>

            <label htmlFor="item-name"></label>
            <input type="text" id="item-name" value={itemName} placeholder='item...'
                onChange={(e) => setItemName(e.target.value)}
            />

            <button>Add</button>
        </form>
    );
};