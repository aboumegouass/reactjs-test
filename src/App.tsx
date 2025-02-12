import { useEffect, useState } from 'react';
import './App.css'
import ItemsList from './components/Items/ItemsList'
import { fetchItems } from './services/api';

function App() {
  const [items, setItems] = useState<ItemType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchItems({ setItems, setLoading, setError });
  }, []);
  return <ItemsList
    loading={loading}
    error={error}
    items={items}
  />
}

export default App
