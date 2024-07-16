import { useState } from 'react';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Earphone", quantity: 1, packed: true },
];


function App() {

  return (
    <div className='app'>
      <Logo />
      <Form />
      <PackagingList />
      <Footer />
    </div>
  )
};


function Logo() {
  return <h1>Far Away</h1>
};

function Form() {
  const [itemName, setItemName] = useState('');
  const [itemQty, setItemQty] = useState(1);


  function handleSubmit(e) {
    e.preventDefault();

    if (!itemName) return;

    const newItem = { itemQty, itemName, packed: false, id: Date.now() };

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
      <input type="text" id="item-name" placeholder='item...'
        onChange={(e) => setItemName(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
};

function PackagingList() {
  return (
    <div className='list'>
      <ul>
        {initialItems.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

function Item({ item: { description, quantity, packed } }) {
  const closeHandler = () => {

  };

  return (
    <li>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>

      <button onClick={closeHandler}>❌</button>
    </li>
  );
};

function Footer() {
  return <footer className='stats'>
    <em>You have X items on your list, you've packed (x%)</em>
  </footer>
}

export default App
