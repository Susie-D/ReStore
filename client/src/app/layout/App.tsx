import { useEffect, useState } from 'react'
import './App.css'

import Catalog from '../../components/catalog/Catalog';

import { Products } from '../models/products';
import Header from './Header';
import { CssBaseline } from '@mui/material';

function App() {
  const [products, setProducts] = useState<Products[]>([]);

  const [error, setError] = useState(null);

  function addProduct() {
    setProducts(prevState => [...prevState,
        {
          id: prevState.length + 101,
          name: 'product' + (prevState.length + 1),
          price: (prevState.length * 100) + 100,
          brand: 'some brand',
          description: 'some description',
          type: '',
          pictureUrl: 'http://picsum.photos/200'
        }
      ]
    )
  }

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => setError(error));
  }, [])


  return (
    <>
      <div>
        <CssBaseline/>
        {(error) ? <p>An error occured</p> : <div>
          <Header/>
          <Catalog products={products} addProduct={addProduct} />
        </div>}
      </div>
    </>
  )
}

export default App
