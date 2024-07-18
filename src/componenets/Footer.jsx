export default function Footer({ items }) {
    const itemNum = items.length;
    const packedItems = items.filter(item => item.packed).length;
    const percentage = Math.round(packedItems / itemNum * 100);

    return <footer className='stats'>
        {percentage === 100 ? (<em>You've got everything. Let's go!!</em>) : itemNum === 0 ? (<em>Please add items to your list.</em>) : (<em>You have {itemNum} items on your list, you've already packed {packedItems} ({percentage}%)</em>)}

    </footer>
}