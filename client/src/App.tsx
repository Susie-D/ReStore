import { useEffect, useState } from 'react'
import './App.css'
import { Products } from './products';

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
        <h1>ReStore</h1>
        {products.map(product => (
          <ul key={product.id}>
            <li>{product.name} - {product.price}</li>
          </ul>
        ))}
        <p></p>
        <button onClick={addProduct}>Add Product</button>
      </div>
    </>
  )
}

export default App
