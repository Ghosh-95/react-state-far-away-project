import Form from './componenets/Form';
import PackagingList from './componenets/PackagingList';
import Footer from './componenets/Footer';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems(items => [...items, item]);
  }

  function deleteItems(id) {
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleCheck(id) {
    setItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item));
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItem={handleItems} />
      <PackagingList items={items} onCheck={handleCheck} onCloseItem={deleteItems} />
      <Footer />
    </div>
  )
};

function Logo() {
  return <h1>Far Away</h1>
};

export default App
